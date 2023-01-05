import Cookies from "js-cookie";
import { reservedKeys } from "../cookies";
import domain from "../domain";
import { ArgumentForUseFetch, createBasicRequestHeaders } from "./headers";

export default function fetcher(
  argument: string | ArgumentForUseFetch,
  config?: RequestInit
) {
  const method = typeof argument === "string" ? "GET" : argument.method;
  const uri = typeof argument === "string" ? argument : argument.uri;
  const parmHeaders =
    typeof argument === "string" ? undefined : argument.headers;
  const parameters =
    typeof argument === "string" ? undefined : argument.parameters;

  console.log(`request:${domain}${uri}`);

  return fetch(`${domain}${uri}`, {
    ...config,
    method: method,
    body: JSON.stringify(parameters),
    headers: createBasicRequestHeaders(
      method,
      parmHeaders,
      Cookies.get(reservedKeys.token) ?? ""
    ),
  });
}
