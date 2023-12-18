# reproduction-vitest-import-meta-resolve

## How to reproduce

```console
$ npm i

$ cat src/index.js
const path = import.meta.resolve('vitest');
console.log(path);

$ node src/index.js
file:///Users/mizdra/src/github.com/mizdra/reproduction-vitest-import-meta-resolve/node_modules/vitest/dist/index.js

$ npm run test -- --run

> app_name@0.0.0 test
> vitest --run


 RUN  v1.0.4 /Users/mizdra/src/github.com/mizdra/reproduction-vitest-import-meta-resolve

 ❯ src/index.test.js (1)
   × import.meta.resolve

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/index.test.js > import.meta.resolve
TypeError: __vite_ssr_import_meta__.resolve is not a function
 ❯ src/index.test.js:4:28
      2|
      3| test('import.meta.resolve', () => {
      4|   const path = import.meta.resolve('vitest');
       |                            ^
      5|   expect(path).toBe(expect.stringContaining('vitest'));
      6| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  01:18:01
   Duration  155ms (transform 11ms, setup 0ms, collect 5ms, tests 3ms, environment 0ms, prepare 44ms)
```
