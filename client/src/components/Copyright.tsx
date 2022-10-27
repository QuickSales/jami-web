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
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

// TODO: Choose on which pages to put this.
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" sx={{ position: 'absolute', bottom: 0, left: 0 }}>
      {'Copyright © 2016-'}
      {new Date().getFullYear()}
      {' Savoir-faire Linux Inc.'}
      <Link color="inherit" href="https://jami.net/">
        Jami.net
      </Link>{' '}
      {'.'}
    </Typography>
  );
}
