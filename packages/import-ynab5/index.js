#!/usr/bin/env ts-node
import * as fs from 'fs';

import { init, shutdown } from '@actual-app/api';

import { importYNAB5 } from './importer';

async function run() {
  let filepath = process.argv[2];
  let data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  await init();
  await importYNAB5(data);
  await shutdown();
}

run();
