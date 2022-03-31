'use strict';

import response from './res';
import { Connection } from './koneksi';

export function Index(req, res) {
    response.ok("Application Running");
}