import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import naverMap from './naverMap';
import auth from './auth/reducer';
import { authSaga } from './auth';
import products from './products/reducer';
import { productsSaga } from './products/sagas';
import product from './product/reducer';
import { productSaga } from './product/sagas';

const rootReducer = combineReducers({
  naverMap,
  auth,
  products,
  product,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga(), productsSaga(), productSaga()]);
}
