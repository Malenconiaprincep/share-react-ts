// Full response && error codes

interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}
export const http3 = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
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