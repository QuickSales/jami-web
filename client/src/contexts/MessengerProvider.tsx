/*
 * Copyright (C) 2022 Savoir-faire Linux Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this program.  If not, see
 * <https://www.gnu.org/licenses/>.
 */
import { ConversationMessage, IConversationSummary, LookupResult, WebSocketMessageType } from 'jami-web-common';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { Contact } from '../models/contact';
import { useConversationsSummariesQuery, useRefreshConversationsSummaries } from '../services/conversationQueries';
import { SetState } from '../utils/utils';
import { useAuthContext } from './AuthProvider';
import { WebSocketContext } from './WebSocketProvider';

export interface IMessengerContext {
  conversationsSummaries: IConversationSummary[] | undefined;

  setSearchQuery: SetState<string | undefined>;

  searchResult: Contact[] | undefined;
}

const defaultMessengerContext: IMessengerContext = {
  conversationsSummaries: undefined,
  setSearchQuery: () => {},
  searchResult: undefined,
};

export const MessengerContext = createContext<IMessengerContext>(defaultMessengerContext);

export default ({ children }: { children: ReactNode }) => {
  const { accountId, axiosInstance } = useAuthContext();
  const webSocket = useContext(WebSocketContext);

  const [searchQuery, setSearchQuery] = useState<string>();
  const [searchResult, setSearchResults] = useState<Contact[] | undefined>(undefined);

  const conversationsSummariesQuery = useConversationsSummariesQuery();
  const conversationsSummaries = conversationsSummariesQuery.data;
  const refreshConversationsSummaries = useRefreshConversationsSummaries();

  useEffect(() => {
    if (!webSocket) {
      return;
    }

    const conversationMessageListener = (_data: ConversationMessage) => {
      refreshConversationsSummaries();
    };

    webSocket.bind(WebSocketMessageType.ConversationMessage, conversationMessageListener);

    return () => {
      webSocket.unbind(WebSocketMessageType.ConversationMessage, conversationMessageListener);
    };
  }, [refreshConversationsSummaries, webSocket]);

  useEffect(() => {
    if (!searchQuery) return;
    const controller = new AbortController();
    axiosInstance
      .get<LookupResult>(`/ns/username/${searchQuery}`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        const contact = new Contact(data.address, data.username);
        setSearchResults([contact]);
      })
      .catch(() => {
        setSearchResults(undefined);
      });
    // return () => controller.abort() // crash on React18
  }, [accountId, searchQuery, axiosInstance]);

  const value = useMemo<IMessengerContext>(
    () => ({
      conversationsSummaries,
      setSearchQuery,
      searchResult,
    }),
    [conversationsSummaries, setSearchQuery, searchResult]
  );

  return <MessengerContext.Provider value={value}>{children}</MessengerContext.Provider>;
};
