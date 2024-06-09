import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';
import { runbatch } from './functions/runbatch/resource'

defineBackend({
  runbatch,
  data,
});
