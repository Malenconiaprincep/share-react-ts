// Full response && error codes

interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}
const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
  let response: IHttpResponse<T>;
  return new Promise((resolve, reject) => {
    fetch(request)
      .then(res => {
        response = res;
        return res.json();
      })
      .then(body => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          reject(response)
        }
      }).catch(err => {
        reject(err)
      })
  });
};

export const get = async <T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
 
export const post = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "post", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
 
export const put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};