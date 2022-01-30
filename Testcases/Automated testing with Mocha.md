### Automated testing with Mocha

https://javascript.info/testing-mocha



##### NOTE:

Q) Mocha not exiting after test

=> https://stackoverflow.com/questions/50372866/mocha-not-exiting-after-test (First answer by "Alex Mantaut") (Read replies)

[REPLIES: This behavior can be really helpful, and I wouldn't recommend forcing your tests to exit. Usually when mocha hangs and won't exit, there is something in your code that needs to be cleaned up. It's better to find the problem. I've found a lot of potential leaks this way.

I used npmjs.com/package/why-is-node-running to find out why my node application was still running. ]