import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import naverMap from './naverMap';
import auth from './auth/reducer';
import { authSaga } from './auth';
import products from './product/reducer';
import { mainSaga } from './product';

const rootReducer = combineReducers({
  naverMap,
  auth,
  products,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga(), mainSaga()]);
}
