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
import { Person } from '@mui/icons-material';
import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useAuthContext } from '../contexts/AuthProvider';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import ConversationAvatar from './ConversationAvatar';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ContactList() {
  const { axiosInstance } = useAuthContext();
  const { accountId } = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [blockOrRemove, setBlockOrRemove] = useState(true);

  const openModal = () => setIsOpen(true);
  const openModalDetails = () => setModalDetailsIsOpen(true);
  const openModalDelete = () => setModalDeleteIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const closeModalDetails = () => setModalDetailsIsOpen(false);
  const closeModalDelete = () => setModalDeleteIsOpen(false);

  const getContactDetails = async () => {
    const controller = new AbortController();
    try {
      const { data } = await axiosInstance.get(`/contacts/${currentContact.id}`, {
        signal: controller.signal,
      });
      console.log('CONTACT LIST - DETAILS: ', data);
    } catch (e) {
      console.log('ERROR GET CONTACT DETAILS: ', e);
    }
  };

  const removeOrBlock = async (block = false) => {
    console.log('REMOVE');
    setBlockOrRemove(false);
    const controller = new AbortController();
    let url = `/contacts/${currentContact.id}`;
    if (block) {
      url += '/block';
    }
    try {
      await axiosInstance(url, {
        signal: controller.signal,
        method: block ? 'POST' : 'DELETE',
      });
    } catch (e) {
      console.log(`ERROR ${block ? 'blocking' : 'removing'} CONTACT : `, e);
    }
    closeModalDelete();
  };

  useEffect(() => {
    const controller = new AbortController();
    axiosInstance
      .get(`/contacts`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        console.log('CONTACTS: ', data);
        setContacts(data);
      });
    return () => controller.abort();
  }, [axiosInstance]);

  return (
    <div className="rooms-list">
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>close</button>

        {/* <div>
            <Person /> Démarrer appel vidéo
          </div>
          <br />

          <div>
            <Person /> Démarrer appel audio
          </div> */}
        <br />

        <div
          onClick={() => {
            console.log('open dialog Supprimer: ');
            setBlockOrRemove(false);
            closeModal();
            openModalDelete();
          }}
        >
          <Person /> Supprimer contact
        </div>
        <br />

        <div
          onClick={() => {
            console.log('open dialog BLOCK: ');
            setBlockOrRemove(true);
            closeModal();
            openModalDelete();
          }}
        >
          <Person /> Bloquer le contact
        </div>
        <br />

        <div
          onClick={() => {
            console.log('open details contact for: ');
            closeModal();
            openModalDetails();
            getContactDetails();
          }}
        >
          <Person /> Détails du contact
        </div>
      </Modal>
      <Modal
        isOpen={modalDeleteIsOpen}
        //   onAfterOpen={afterOpenModalDetails}
        onRequestClose={closeModalDelete}
        style={customStyles}
        contentLabel="Merci de confirmer"
      >
        Voulez vous vraiment {blockOrRemove ? 'bloquer' : 'supprimer'} ce contact?
        <br />
        {blockOrRemove ? (
          <button onClick={() => removeOrBlock(true)}>Bloquer</button>
        ) : (
          <button onClick={() => removeOrBlock()}>Supprimer</button>
        )}
        <button onClick={closeModalDelete}>Annuler</button>
      </Modal>

      <List>
        {contacts?.map((contact) => (
          <ListItem
            button
            alignItems="flex-start"
            key={contact.id}
            // selected={isSelected}
            onClick={() => {
              setCurrentContact(contact);
              openModal();
            }}
          >
            <ListItemAvatar>
              <ConversationAvatar
              // displayName={conversation.getDisplayNameNoFallback()}
              // displayName={`${contact.id}`}
              />
            </ListItemAvatar>
            <ListItemText primary={contact.id} secondary={contact.id} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
