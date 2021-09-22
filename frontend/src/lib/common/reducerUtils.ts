import {
  AsyncActionCreatorBuilder,
  createAsyncAction,
  getType,
} from 'typesafe-actions';

export type AsyncState<T, E = any> = {
  loading: boolean;
  data: T | null;
  error: E | null;
};

export const asyncState = {
  init: <T, E = any>(initData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initData || null,
    error: null,
  }),
  request: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: true,
    data: data || null,
    error: null,
  }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({
    loading: false,
    data,
    error: null,
  }),
  failure: <T, E>(error: E): AsyncState<T, E> => ({
    loading: false,
    data: null,
    error: error,
  }),
};

export type AsyncAction = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};

export function createAsyncActionType(actionName: string): AsyncAction {
  const asyncTypeAction: string[] = ['_REQUEST', '_SUCCESS', '_FAILURE'];

  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
  } as const;
}

export function createActionEntity<R, S, F>(asyncAction: AsyncAction) {
  return createAsyncAction(
    asyncAction.REQUEST,
    asyncAction.SUCCESS,
    asyncAction.FAILURE,
  )<R, S, F>();
}

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export function transformToArray<AC extends AnyAsyncActionCreator>(
  asyncActionCreator: AC,
) {
  const { request, success, failure } = asyncActionCreator;
  return [request, success, failure];
}

export function createAsyncReducer<
  S,
  AC extends AnyAsyncActionCreator,
  K extends keyof S
>(asyncActionCreator: AC, key: K) {
  const [request, success, failure] = transformToArray(asyncActionCreator).map(
    getType,
  );

  return {
    [request]: (state: S) => ({
      ...state,
      [key]: asyncState.request(),
    }),
    [success]: (
      state: S,
      action: ReturnType<typeof asyncActionCreator.success>,
    ) => ({
      ...state,
      [key]: asyncState.success(action.payload),
    }),
    [failure]: (
      state: S,
      action: ReturnType<typeof asyncActionCreator.failure>,
    ) => ({
      ...state,
      [key]: asyncState.failure(action.payload),
    }),
  };
}
