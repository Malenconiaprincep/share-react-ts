// async await support

export const http1 = async (request: RequestInfo): Promise<any> => {
  return new Promise(resolve => {
    fetch(request)
      .then(response => response.json())
      .then(body => {
        resolve(body);
      });
  });
};