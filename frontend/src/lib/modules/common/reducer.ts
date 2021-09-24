import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { headerMenuSelectAsync } from './actions';
import { CommonAction, CommonState } from './types';

const initState: CommonState = {
  headerMenuSelect: asyncState.init(),
};

const common = createReducer<CommonState, CommonAction>(initState, {
  ...createAsyncReducer(headerMenuSelectAsync, 'headerMenuSelect'),
});

export default common;
