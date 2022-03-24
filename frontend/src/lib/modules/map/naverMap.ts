import { ActionType, createAction, createReducer } from 'typesafe-actions';

const CREATED = 'naverMap/CREATE';
const LOADED = 'naverMap/LOADED';
const SET_ADDRESS = 'naverMap/SET_ADDRESS';

export const created = createAction(CREATED)<any>();
export const loaded = createAction(LOADED)();
export const setAddress = createAction(SET_ADDRESS)<any>();

const actions = { created, loaded, setAddress };
type NaverMapAction = ActionType<typeof actions>;

type NaverMapState = {
  naverMap: any;
  loaded: boolean;
  address: {
    jibunAddress: string;
    roadAddress: string;
  };
};

const initState: NaverMapState = {
  naverMap: null,
  loaded: false,
  address: {
    jibunAddress: '',
    roadAddress: '',
  },
};

const naverMap = createReducer<NaverMapState, NaverMapAction>(initState, {
  [CREATED]: (state, { payload: naverMap }) => ({
    ...state,
    naverMap,
  }),
  [LOADED]: (state) => ({
    ...state,
    loaded: true,
  }),
  [SET_ADDRESS]: (state, { payload: address }) => ({
    ...state,
    address,
  }),
});

export default naverMap;
