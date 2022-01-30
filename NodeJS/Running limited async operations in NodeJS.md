### Using promise pool:-

Package:     "@supercharge/promise-pool": "^1.7.0",

```javascript
/**
 * Process the list of total data with a concurrency of provided number.
 * The promise pool takes the next task from the list as soon
 * as one of the active tasks in the pool finishes.
 */

const {results , errors} = await PromisePool
      .for(dataArray)
      .withConcurrency(5)
      .process(data => {
          	return operation(data);
      })
      .catch(promisePoolErr => {
            return {
              success: false,
              response: promisePoolErr,
            };
      });

console.log('results: ', results);
console.log('errors: ', errors);
```





### Using async.mapLimit:-

Package:   async

https://caolan.github.io/async/v3/docs.html

```javascript
async.mapLimit(
  dataArr,
  25,
  async function (data) {
    return operation(data);
  },
  (err, results) => {
    if (err) {
        console.log(err);
        return err;
    }

    // results is now an array of the responses
    console.log(results && results.length);
  }
);

```

