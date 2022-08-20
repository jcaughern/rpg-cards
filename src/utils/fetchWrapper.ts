export type CallbackType = (response: any, error?: string | null) => void;
export type SuccessCallbackType = (response: any) => void;
export type ErrorCallbackType = (error: string) => void;

const fetchWrapper = (method: string | Request, headers: Headers, )

const request = (
  method: Request,
  headers: Headers,
  body: any = null
): RequestInterface => {
  const retrieveDataObject: RequestInterface = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  body && (retrieveDataObject['body'] = JSON.stringify(body));

  return retrieveDataObject;
};

export const compactFetch =
  (method: MethodType, headers?: RequestHeaders, body?: any) =>
  (url: string, callback: CallbackType) => {
    retrieve(url, request(method, headers, body), callback);
  };
