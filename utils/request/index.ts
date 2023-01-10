import Cookies from "js-cookie";
import { Router } from "next/router";
import { reservedKeys } from "../cookies";
import domain from "./domain";
import { ArgumentForUseFetch, createBasicRequestHeaders } from "./headers";

export default function fetcher(
  argument: string | ArgumentForUseFetch,
  config?: RequestInit,
  timeout: number = 8000
) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const method = typeof argument === "string" ? "GET" : argument.method;
  const uri = typeof argument === "string" ? argument : argument.uri;
  const parmHeaders =
    typeof argument === "string" ? undefined : argument.headers;
  const parameters =
    typeof argument === "string" ? undefined : argument.parameters;

  console.log(`request:${domain}${uri}`);

  return fetch(`${domain}${uri}`, {
    ...config,
    // credentials: "include",
    keepalive: true,
    signal: controller.signal,
    method: method,
    body: JSON.stringify(parameters),
    headers: createBasicRequestHeaders(
      method,
      parmHeaders,
      Cookies.get(reservedKeys.token) ?? ""
    ),
  })
    .then((response) => {
      // const res = response.clone();

      if (response.ok) {
        return response.json();
      }
      return Promise.reject({
        code: "STATUS ERROR",
        status: response.status,
        statusText: response.statusText,
      });
    })
    .catch((err) => {
      if (err?.code === "STATUS ERROR") {
        console.log(` Status Error ======> 「${domain}${uri}」`);
        switch (err.status) {
          case 401:
            break;
          case 403:
            break;
        }
      } else if (!navigator.onLine) {
        console.log(` NetWork Error ======> 「${domain}${uri}」`);
      } else {
        console.log(` Request Timeout ======> 「${domain}${uri}」`);
      }

      return Promise.reject(err);
    })
    .finally(() => {
      clearTimeout(id);
    });
}
