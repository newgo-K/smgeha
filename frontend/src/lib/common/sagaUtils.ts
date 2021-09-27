import { call, put } from '@redux-saga/core/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

export type PromiseCreatorFunction<P, T> =
  | ((payment: P) => Promise<T>)
  | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  return action.payload !== undefined;
}

export function createAsyncSaga<
  RequestType,
  RequestPayload,
  SuccessType,
  SuccessPayload,
  FailureType,
  FailurePayload
>(
  asyncAction: AsyncActionCreatorBuilder<
    [RequestType, [RequestPayload, undefined]],
    [SuccessType, [SuccessPayload, undefined]],
    [FailureType, [FailurePayload, undefined]]
  >,
  asyncFunction: PromiseCreatorFunction<RequestPayload, SuccessPayload>,
  successFunc?: any,
  failureFunc?: any,
) {
  return function* saga(action: ReturnType<typeof asyncAction.request>) {
    try {
      const result: SuccessPayload = isPayloadAction<RequestPayload>(action)
        ? yield call(asyncFunction, action.payload)
        : yield call(asyncFunction);

      yield put(asyncAction.success(result));
      if (successFunc) {
        yield call(successFunc, result);
      }
    } catch (err: any) {
      yield put(asyncAction.failure(err));
      if (failureFunc) {
        yield call(failureFunc, err);
      }
    }
  };
}
