import {useLogout} from './useLogout';
import {ANALYTICS_EVENTS} from '../constants';
import {AxiosError, AxiosResponse} from 'axios';
import AppCenterAnalytics from 'appcenter-analytics';
import {useState, useEffect, useCallback} from 'react';

export interface SuccessResponse<T = any | any[]> {
  data: T;
  status: number;
  message: string;
}

export type ErrorResponse<T = any | any[]> = AxiosError<{
  payload: T;
  message: string;
  errors: Array<string>;
}> &
  Error;

export interface PaginatedResponse<T = any> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T[];
  numberOfElements: number;
  last: true;
  first: true;
  pageable: {
    offset: number;
    sort: {
      empty: true;
      sorted: true;
      unsorted: true;
    };
    pageNumber: number;
    pageSize: number;
    unpaged: true;
    paged: true;
  };
  empty: true;
}

interface Props<T> {
  onSuccess?: (data?: T) => void;
  onError?: (error: string) => void;
  initialData?: T;
  onLoadRequest?: Promise<AxiosResponse<T>>;
}

const useFetch = <T = SuccessResponse>(props?: Props<T>) => {
  const {handleLogout} = useLogout();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<T | undefined>(
    props?.initialData,
  );

  useEffect(() => {
    if (successResponse && props?.onSuccess) {
      props.onSuccess(successResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successResponse]);

  useEffect(() => {
    if (error && props?.onError) {
      props.onError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, props?.onError]);

  useEffect(() => {
    if (props?.onLoadRequest) {
      handleRequest(props.onLoadRequest);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.onLoadRequest]);

  const handleRequest = useCallback(
    async (apiHandler: Promise<AxiosResponse> | Promise<AxiosResponse[]>) => {
      setIsLoading(true);
      setError('');
      try {
        const response = (await apiHandler) as any;

        if (Array.isArray(response)) {
          setSuccessResponse(response.map(res => res.data || res) as T);
        } else {
          setSuccessResponse(response.data || response);
        }
        setIsLoading(false);
      } catch (e: any) {
        setIsLoading(false);
        const apiError =
          e.response?.data?.errors?.length &&
          Array.isArray(e.response?.data?.errors)
            ? e.response.data.errors
                .map((err: {messageError: string}) => err.messageError)
                .join('\n')
            : e.response?.data?.message || e.message || e;

        if (e.response?.status === 401) {
          /**
           * anytime a user gets a response status of 403
           * log them out  of the app.
           * the session has expired
           */
          handleLogout();
        }

        if (apiError) {
          AppCenterAnalytics.trackEvent(
            ANALYTICS_EVENTS.NETWORK_REQUEST_FAILURE,
            {
              message: apiError
                ? Array.isArray(apiError)
                  ? apiError[0]
                  : apiError
                : e.message || e,
              url: e.config.baseUrl + e.config.url,
            },
          );
          setError(
            apiError
              ? Array.isArray(apiError)
                ? apiError[0]
                : apiError
              : e.message || e,
          );
        }
      }
    },
    [handleLogout],
  );

  return {
    isLoading,
    setIsLoading,
    successResponse,
    setSuccessResponse,
    error,
    setError,
    handleRequest,
  };
};

export default useFetch;
