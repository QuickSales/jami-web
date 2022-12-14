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
import { Box, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { IConversationSummary } from 'jami-web-common';
import { QRCodeCanvas } from 'qrcode.react';
import { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthProvider';
import { CallManagerContext } from '../contexts/CallManagerProvider';
import { CallStatus, useCallContext } from '../contexts/CallProvider';
import { useUrlParams } from '../hooks/useUrlParams';
import { setRefreshFromSlice } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';
import { ConversationRouteParams } from '../router';
import ContextMenu, { ContextMenuHandler, useContextMenuHandler } from './ContextMenu';
import ConversationAvatar from './ConversationAvatar';
import { ConfirmationDialog, DialogContentList, InfosDialog, useDialogHandler } from './Dialog';
import { PopoverListItemData } from './PopoverList';
import { AudioCallIcon, CancelIcon, MessageIcon, PersonIcon, VideoCallIcon } from './SvgIcon';

type ConversationListItemProps = {
  conversationSummary: IConversationSummary;
};

export default function ConversationListItem({ conversationSummary }: ConversationListItemProps) {
  const {
    urlParams: { conversationId: selectedConversationId },
  } = useUrlParams<ConversationRouteParams>();
  const contextMenuHandler = useContextMenuHandler();
  const callContext = useCallContext(true);
  const { callData } = useContext(CallManagerContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const conversationId = conversationSummary.id;
  const isSelected = conversationId === selectedConversationId;

  const onClick = useCallback(() => {
    if (conversationId) {
      navigate(`/conversation/${conversationId}`);
    }
  }, [navigate, conversationId]);

  const secondaryText = useMemo(() => {
    if (!callContext || !callData || callData.conversationId !== conversationSummary.id) {
      return conversationSummary.lastMessage.body;
    }

    if (callContext.callStatus === CallStatus.InCall) {
      return callContext.isAudioOn ? t('ongoing_call_unmuted') : t('ongoing_call_muted');
    }

    if (callContext.callStatus === CallStatus.Connecting) {
      return t('connecting_call');
    }

    return callContext.callRole === 'caller' ? t('outgoing_call') : t('incoming_call');
  }, [conversationSummary, callContext, callData, t]);

  const conversationName = useMemo(
    () => conversationSummary.title ?? conversationSummary.membersNames.join(', '),
    [conversationSummary]
  );

  return (
    <Box onContextMenu={contextMenuHandler.handleAnchorPosition}>
      <ConversationMenu
        conversationId={conversationId}
        conversationName={conversationName}
        onMessageClick={onClick}
        isSelected={isSelected}
        contextMenuProps={contextMenuHandler.props}
      />
      <ListItem button alignItems="flex-start" selected={isSelected} onClick={onClick}>
        <ListItemAvatar>
          <ConversationAvatar displayName={conversationName} />
        </ListItemAvatar>
        <ListItemText primary={conversationName} secondary={secondaryText} />
      </ListItem>
    </Box>
  );
}

interface ConversationMenuProps {
  conversationId: string;
  conversationName: string;
  onMessageClick: () => void;
  isSelected: boolean;
  contextMenuProps: ContextMenuHandler['props'];
}

const ConversationMenu = ({
  conversationId,
  conversationName,
  onMessageClick,
  isSelected,
  contextMenuProps,
}: ConversationMenuProps) => {
  const { t } = useTranslation();
  const { startCall } = useContext(CallManagerContext);
  const [isSwarm] = useState(true);

  const detailsDialogHandler = useDialogHandler();
  const RemoveConversationDialogHandler = useDialogHandler();

  const navigate = useNavigate();

  const menuOptions: PopoverListItemData[] = useMemo(
    () => [
      {
        label: t('conversation_message'),
        Icon: MessageIcon,
        onClick: onMessageClick,
      },
      {
        label: t('conversation_start_audiocall'),
        Icon: AudioCallIcon,
        onClick: () => {
          if (conversationId) {
            startCall({
              conversationId,
              role: 'caller',
            });
          }
        },
      },
      {
        label: t('conversation_start_videocall'),
        Icon: VideoCallIcon,
        onClick: () => {
          if (conversationId) {
            startCall({
              conversationId,
              role: 'caller',
              withVideoOn: true,
            });
          }
        },
      },
      ...(isSelected
        ? [
            {
              label: t('conversation_close'),
              Icon: CancelIcon,
              onClick: () => {
                navigate(`/`);
              },
            },
          ]
        : []),
      {
        label: t('conversation_details'),
        Icon: PersonIcon,
        onClick: () => {
          detailsDialogHandler.openDialog();
        },
      },
      {
        label: t('conversation_delete'),
        Icon: CancelIcon,
        onClick: () => {
          RemoveConversationDialogHandler.openDialog();
        },
      },
    ],
    [
      navigate,
      onMessageClick,
      isSelected,
      detailsDialogHandler,
      RemoveConversationDialogHandler,
      t,
      startCall,
      conversationId,
    ]
  );

  return (
    <>
      <ContextMenu {...contextMenuProps} items={menuOptions} />

      <DetailsDialog
        {...detailsDialogHandler.props}
        conversationId={conversationId}
        conversationName={conversationName}
        isSwarm={isSwarm}
      />

      <RemoveConversationDialog {...RemoveConversationDialogHandler.props} conversationId={conversationId} />
    </>
  );
};

interface DetailsDialogProps {
  conversationId: string;
  conversationName: string;
  open: boolean;
  onClose: () => void;
  isSwarm: boolean;
}

const DetailsDialog = ({ conversationId, conversationName, open, onClose, isSwarm }: DetailsDialogProps) => {
  const { t } = useTranslation();
  const items = useMemo(
    () => [
      {
        label: t('conversation_details_name'),
        value: conversationName,
      },
      {
        label: t('conversation_details_identifier'),
        value: conversationId,
      },
      {
        label: t('conversation_details_qr_code'),
        value: <QRCodeCanvas size={80} value={`${conversationId}`} />,
      },
      {
        label: t('conversation_details_is_swarm'),
        value: isSwarm ? t('conversation_details_is_swarm_true') : t('conversation_details_is_swarm_false'),
      },
    ],
    [conversationId, conversationName, isSwarm, t]
  );
  return (
    <InfosDialog
      open={open}
      onClose={onClose}
      icon={<ConversationAvatar sx={{ width: 'inherit', height: 'inherit' }} displayName={conversationName} />}
      title={conversationName}
      content={<DialogContentList title={t('conversation_details_informations')} items={items} />}
    />
  );
};

interface RemoveConversationDialogProps {
  conversationId: string;
  open: boolean;
  onClose: () => void;
}

const RemoveConversationDialog = ({ conversationId, open, onClose }: RemoveConversationDialogProps) => {
  const { axiosInstance } = useAuthContext();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const remove = async () => {
    const controller = new AbortController();
    try {
      await axiosInstance.delete(`/conversations/${conversationId}`, {
        signal: controller.signal,
      });
      dispatch(setRefreshFromSlice());
    } catch (e) {
      console.error(`Error removing conversation : `, e);
      dispatch(setRefreshFromSlice());
    }
    onClose();
  };

  return (
    <ConfirmationDialog
      open={open}
      onClose={onClose}
      title={t('dialog_confirm_title_default')}
      content={t('conversation_ask_confirm_remove')}
      onConfirm={remove}
      confirmButtonText={t('conversation_confirm_remove')}
    />
  );
};
