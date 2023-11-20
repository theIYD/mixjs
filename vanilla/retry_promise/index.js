function retryPromise(fetcher, maxRetryCount) {
  return new Promise((resolve, reject) => {
    const storeFetcher = () => {
      if (maxRetryCount > 0) {
        fetcher().then(
          (data) => {
            resolve(data);
          },
          (err) => {
            // retry
            storeFetcher();
            maxRetryCount--;
          }
        );
      } else {
        reject();
      }
    };

    storeFetcher();
  });
}
