import { reservedKeys } from "../cookies";
import { RequestMethod } from "./methods";

type PureValue = any;
type PureObject = Record<string, PureValue>;

export type ArgumentForUseFetch = {
  method: RequestMethod;
  uri: string;
  parameters?: string | PureObject;
  headers?: PureObject;
  //   token: string;
};

export const createBasicRequestHeaders = (
  method: RequestMethod,
  parmHeaders: ArgumentForUseFetch["headers"] = {},
  token: string
) => {
  const headers: HeadersInit = {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };

  if (method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  return { ...headers, ...parmHeaders };
};
