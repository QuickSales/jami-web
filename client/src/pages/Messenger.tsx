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
import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';

import ConversationList from '../components/ConversationList';
import Header from '../components/Header';
import NewContactForm from '../components/NewContactForm';

const Messenger = ({ children }: { children?: ReactNode }) => {
  return (
    <Box display="flex" height="100%">
      <Stack flexGrow={0} flexShrink={0} overflow="auto">
        <Header />
        <NewContactForm />
        <ConversationList />
      </Stack>
      <Box flexGrow={1} display="flex" position="relative">
        {children}
      </Box>
    </Box>
  );
};

export default Messenger;
