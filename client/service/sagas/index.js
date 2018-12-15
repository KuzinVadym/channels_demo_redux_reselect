import { all, spawn } from 'redux-saga/effects'

import { watchLoadChannels } from './init';

export default function* rootSaga() {
  yield all([
    spawn(watchLoadChannels)
  ])
}