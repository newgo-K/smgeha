import { createAsyncSaga } from 'lib/common/sagaUtils';
import { headerMenuSelectAsync } from './actions';
import { takeEvery } from '@redux-saga/core/effects';
import { reqHeaderMenuSelect } from 'lib/api/common';

const headerMenuSelectSaga = createAsyncSaga(
  headerMenuSelectAsync,
  reqHeaderMenuSelect,
);

export function* commonSaga() {
  yield takeEvery(headerMenuSelectAsync.request, headerMenuSelectSaga);
}
