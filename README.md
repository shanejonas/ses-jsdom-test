# SES jsdom test


this is a repo to show an error im hitting with running tests with ses lockdown + jsdom:

```
$ yarn setup
$ yarn test
 ● Test suite failed to run
    Unexpected intrinsic intrinsics.ArrayBuffer.__proto__ at %FunctionPrototype%
```


the ses lockdown code lives in `jest-setup.js`


### Notes

- I'd like to have the `window` and other globals taken care of by `jsdom` first, then lockdown.
- There is this https://github.com/jsdom/webidl2js which is used to generate and adhere to the standards. Could be adding something not in the spec?
