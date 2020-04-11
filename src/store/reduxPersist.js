import storageSession from 'redux-persist/lib/storage/session';

import ImmutablePersistenceTransform from './ImmutablePersistenceTransform';

export default {
  key: '@stis',
  storage: storageSession,
  whitelist: ['auth'],
  transforms: [ImmutablePersistenceTransform],
};
