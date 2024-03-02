import { useEffect, useState } from 'react';

interface RequestConfig {
  url: string;
  method?: string;
  payload?: Record<string, string | number>;
  headers?: Record<string, string>;
}

interface Response extends Body {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  clone: () => Response;
}

interface UseFetchReturn<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

const makeFetchRequest = async ({
  url = '/',
  method = 'GET',
  payload,
  headers,
}: RequestConfig): Promise<Response> => {
  return await fetch(url, { method, headers, body: JSON.stringify(payload) });
};

const fetcher = async <T>({ url, method, headers, payload }: RequestConfig): Promise<T> => {
  const apiResponse = await makeFetchRequest({ url, method, headers, payload });
  return await apiResponse.json();
};

const useFetch = <T>({ url, headers, method, payload }: RequestConfig): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetcher<T>({ url });
        setData(res);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
