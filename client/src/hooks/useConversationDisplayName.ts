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
import { ConversationInfos } from 'jami-web-common';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Account } from '../models/account';
import { ConversationMember } from '../models/conversation-member';
import { translateEnumeration, TranslateEnumerationOptions } from '../utils/translations';

export const useConversationDisplayName = (
  account: Account,
  conversationId: string | undefined,
  conversationInfos: ConversationInfos | undefined,
  members: ConversationMember[] | undefined
) => {
  const { t } = useTranslation();

  const adminTitle = conversationInfos?.title as string;

  return useMemo(() => {
    if (adminTitle) {
      return adminTitle;
    }

    if (!members) {
      return conversationId;
    }

    const options: TranslateEnumerationOptions<ConversationMember> = {
      elementPartialKey: 'member',
      getElementValue: (member) => member.getDisplayName(),
      translaters: [
        () =>
          // The user is chatting with themself
          t('conversation_title_one', { member0: account?.getDisplayName() }),
        (interpolations) => t('conversation_title_one', interpolations),
        (interpolations) => t('conversation_title_two', interpolations),
        (interpolations) => t('conversation_title_three', interpolations),
        (interpolations) => t('conversation_title_four', interpolations),
        (interpolations) => t('conversation_title_more', interpolations),
      ],
    };

    return translateEnumeration<ConversationMember>(members, options);
  }, [account, adminTitle, conversationId, members, t]);
};
