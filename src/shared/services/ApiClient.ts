/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import isString from "lodash/isString";

import { isJsonContentType, getHeaders } from "./apiClientHelper";
import { Url } from "./url";

class ApiClient {
  async get(url: Url | string, body?: any, options?: any) {
    return this.request("GET", url, body, options);
  }

  async post(url: Url | string, body?: any, options?: any) {
    return this.request("POST", url, body, options);
  }

  async put(url: Url | string, body?: any, options?: any) {
    return this.request("PUT", url, body, options);
  }

  async delete(url: Url | string, body?: any, options?: any) {
    return this.request("DELETE", url, body, options);
  }

  async patch(url: Url | string, body?: any, options?: any) {
    return this.request("PATCH", url, body, options);
  }

  async request(method: string, url: Url | string, body?: any, options?: any) {
    const headers = getHeaders();

    if (body) {
      if (body instanceof FormData) {
        headers.delete("Content-Type");
      } else if (!isString(body)) {
        body = JSON.stringify(body);
      }
    }

    let extraOptions = {};

    if (options) {
      const { headers: additionalHeaders, ...restOptions } = options;
      extraOptions = restOptions;
      for (const header in additionalHeaders) {
        if (additionalHeaders.hasOwnProperty(header)) {
          headers.append(header, additionalHeaders(header));
        }
      }
    }

    return fetch(url.toString(), {
      body,
      method,
      headers,
      ...extraOptions,
    }).then(
      response =>
        new Promise((resolve, reject) => {
          const type = response.headers.get("content-type");

          let promise;
          if (isJsonContentType(type)) {
            promise = response.json();
          } else {
            promise = response.text();
          }

          promise.then(data => {
            if (response.status < 400) {
              resolve(data);
            } else {
              reject(data);
            }
          });
        }),
    );
  }
}

export default new ApiClient();
