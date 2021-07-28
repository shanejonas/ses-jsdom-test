# SES jsdom test


this is a repo to show an error im hitting with running tests with ses lockdown + jsdom:

```
$ yarn setup
$ yarn test
 ● Test suite failed to run
    Unexpected intrinsic intrinsics.ArrayBuffer.__proto__ at %FunctionPrototype%
```


the ses lockdown code lives in `jest-setup.js`


