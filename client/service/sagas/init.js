import { all, take, takeLatest, put, call, fork, select } from 'redux-saga/effects'

import { LOAD_CHANNELS } from '../../constants/ActionTypes'
import { loadChannelsFail } from '../../actions/init';
import { reciveChannels } from '../../actions/channels';
import { loadChannels } from '../rest/init';

function* loadChann(...args) {
  try {
     const channels = yield call(loadChannels);
     yield put(reciveChannels(channels));
  } catch (err) {
    yield put(loadChannelsFail());
  }
}

export function* watchLoadChannels() {
  yield takeLatest(LOAD_CHANNELS, loadChann)
}
