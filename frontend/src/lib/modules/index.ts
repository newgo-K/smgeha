import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import naverMap from './naverMap';
import auth from './auth/reducer';
import { authSaga } from './auth';
import products from './products/reducer';
import { productsSaga } from './products';

const rootReducer = combineReducers({
  naverMap,
  auth,
  products,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga(), productsSaga()]);
}
