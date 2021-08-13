import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from 'redux-injectors';
import {
  InjectReducerParams,
  InjectSagaParams,
  RootStateKeyType,
} from './types/injector-typings';

/* Wrap redux-injectors with stricter types */

export const useInjectReducer = <Key extends RootStateKeyType>(
  params: InjectReducerParams<Key>,
) => useReducer(params);

export const useInjectSaga = (params: InjectSagaParams) => useSaga(params);
