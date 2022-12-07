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

import { Dialog, DialogProps, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { Contact } from '../models/contact';
import AddContactPage from '../pages/AddContactPage';
import ConversationAvatar from './ConversationAvatar';
import { useDialogHandler } from './Dialog';

type ContactSearchResultListProps = {
  contacts: Contact[];
};

export default ({ contacts }: ContactSearchResultListProps) => {
  return (
    <List>
      {contacts?.map((contact) => (
        <ContactSearchResultListItem key={contact.uri} contact={contact} />
      ))}
    </List>
  );
};

type ContactSearchResultListItemProps = {
  contact: Contact;
};

const ContactSearchResultListItem = ({ contact }: ContactSearchResultListItemProps) => {
  const dialogHandler = useDialogHandler();

  return (
    <>
      <AddContactDialog {...dialogHandler.props} contactId={contact.uri} />
      <ListItem
        button
        alignItems="flex-start"
        key={contact.uri}
        onClick={() => {
          dialogHandler.openDialog();
        }}
      >
        <ListItemAvatar>
          <ConversationAvatar />
        </ListItemAvatar>
        <ListItemText primary={contact.getDisplayName()} secondary={contact.uri} />
      </ListItem>
    </>
  );
};

type AddContactDialogProps = DialogProps & {
  contactId: string;
};

const AddContactDialog = ({ contactId, ...props }: AddContactDialogProps) => {
  return (
    <Dialog {...props}>
      <AddContactPage contactId={contactId} />
    </Dialog>
  );
};
