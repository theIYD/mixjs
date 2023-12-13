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
          },
        );
      } else {
        reject();
      }
    };

    storeFetcher();
  });
}

async function retryPromiseWithDelay(fetcher, delay, maxRetryCount) {
  const wait = (ms) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });

  return new Promise((resolve, reject) => {
    const storeFetcher = () => {
      if (maxRetryCount > 0) {
        fetcher().then(
          (data) => {
            resolve(data);
          },
          (err) => {
            // retry
            wait(delay).then(() => {
              storeFetcher();
              maxRetryCount--;
            });
          },
        );
      } else {
        reject();
      }
    };

    storeFetcher();
  });
}
