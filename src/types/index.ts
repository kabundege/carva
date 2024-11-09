import {AxiosResponse} from 'axios';
import {SuccessResponse} from '../hooks/useFetch';

export type Service<T> = Promise<AxiosResponse<SuccessResponse<T>, any>>;
