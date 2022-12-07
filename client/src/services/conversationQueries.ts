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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ConversationInfos, IConversationMember, IConversationSummary, Message } from 'jami-web-common';
import { useCallback } from 'react';

import { useAuthContext } from '../contexts/AuthProvider';
import { ConversationMember } from '../models/conversation-member';

export const useConversationInfosQuery = (conversationId?: string) => {
  const { axiosInstance } = useAuthContext();
  return useQuery(
    ['conversations', conversationId],
    async () => {
      const { data } = await axiosInstance.get<ConversationInfos>(`/conversations/${conversationId}/infos`);
      return data;
    },
    {
      enabled: !!conversationId,
    }
  );
};

export const useConversationsSummariesQuery = () => {
  const { axiosInstance } = useAuthContext();
  return useQuery(['conversations', 'summaries'], async () => {
    const { data } = await axiosInstance.get<IConversationSummary[]>(`/conversations`);
    return data;
  });
};

export const useRefreshConversationsSummaries = () => {
  const queryClient = useQueryClient();
  return useCallback(() => {
    queryClient.invalidateQueries(['conversations', 'summaries']);
  }, [queryClient]);
};

export const useMembersQuery = (conversationId?: string) => {
  const { axiosInstance } = useAuthContext();
  return useQuery(
    ['conversations', conversationId, 'members'],
    async () => {
      const { data } = await axiosInstance.get<IConversationMember[]>(`/conversations/${conversationId}/members`);
      return data.map((item) => ConversationMember.fromInterface(item));
    },
    {
      enabled: !!conversationId,
    }
  );
};

export const useMessagesQuery = (conversationId: string) => {
  const { axiosInstance } = useAuthContext();
  return useQuery(
    ['conversations', conversationId, 'messages'],
    async () => {
      const { data } = await axiosInstance.get<Message[]>(`/conversations/${conversationId}/messages`);
      return data;
    },
    {
      enabled: !!conversationId,
    }
  );
};

export const useSendMessageMutation = (conversationId: string) => {
  const { axiosInstance } = useAuthContext();
  const queryClient = useQueryClient();
  return useMutation(
    (message: string) => axiosInstance.post(`/conversations/${conversationId}/messages`, { message }),
    {
      onSuccess: () => queryClient.invalidateQueries(['messages', conversationId]),
    }
  );
};
