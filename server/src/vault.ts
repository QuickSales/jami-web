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
import { readFile } from 'node:fs/promises';

import { importPKCS8, importSPKI, KeyLike } from 'jose';
import { Service } from 'typedi';

@Service()
export class Vault {
  privateKey!: KeyLike;
  publicKey!: KeyLike;

  // TODO: Convert to environment variables and check if defined
  async build() {
    const privateKeyBuffer = await readFile('privkey.pem');
    this.privateKey = await importPKCS8(privateKeyBuffer.toString(), 'EdDSA');

    const publicKeyBuffer = await readFile('pubkey.pem');
    this.publicKey = await importSPKI(publicKeyBuffer.toString(), 'EdDSA');

    return this;
  }
}
