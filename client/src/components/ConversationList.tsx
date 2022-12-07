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
import { GroupRounded as GroupIcon } from '@mui/icons-material';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';

import { MessengerContext } from '../contexts/MessengerProvider';
import ContactSearchResultList from './ContactSearchResultList';
import ConversationListItem from './ConversationListItem';
import LoadingPage from './Loading';

export default function ConversationList() {
  const { searchResult, conversationsSummaries } = useContext(MessengerContext);

  if (!conversationsSummaries) {
    return <LoadingPage />;
  }

  return (
    <div className="rooms-list">
      <List>
        {searchResult && (
          <div>
            <ListSubheader>Public directory</ListSubheader>
            <ContactSearchResultList contacts={searchResult} />
            <ListSubheader>Conversations</ListSubheader>
          </div>
        )}
        {conversationsSummaries.map((conversationSummary) => (
          <ConversationListItem key={conversationSummary.id} conversationSummary={conversationSummary} />
        ))}
        {conversationsSummaries.length === 0 && (
          <div className="list-placeholder">
            <GroupIcon color="disabled" fontSize="large" />
            <Typography className="subtitle" variant="subtitle2">
              No conversation yet
            </Typography>
          </div>
        )}
      </List>
    </div>
  );
}
