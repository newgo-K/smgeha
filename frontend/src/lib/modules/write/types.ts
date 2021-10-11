import { SelectTypesProps } from 'lib/api/write';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductWriteAction = ActionType<typeof actions>;

export type ProductWriteState = {
  productWriteSetData: SelectTypesProps;
};
