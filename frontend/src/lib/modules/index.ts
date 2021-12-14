import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import naverMap from './naverMap';
import auth from './auth/reducer';
import { authSaga } from './auth';
import category from './category/reducer';
import { categorySaga } from './category/sagas';
import products from './products/reducer';
import { productsSaga } from './products/sagas';
import product from './product/reducer';
import { productSaga } from './product/sagas';
import write from './write/reducer';
import { writeSaga } from './write/sagas';

const rootReducer = combineReducers({
  naverMap,
  auth,
  category,
  products,
  product,
  write,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    productsSaga(),
    productSaga(),
    writeSaga(),
  ]);
}
