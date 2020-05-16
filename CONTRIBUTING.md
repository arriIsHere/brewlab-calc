# Contributions

If you wish to contribute/add to this library feel free to fork this repo and open a pull request. 
I only ask that you follow these rules for adding. Any pull requests that do not follow these rules will be closed.

## Da Rules

1. **Create a new file for the new function.** - Each function should have its own file that it is exported as the default from. 
You may define other helper functions as you wish but the only item exported should be the function that shares a name with the file.
These files should all be typescript files.

2. **Document your function** - Each function should have ample documentation so that someone using should not have to crack open the source file or read other 
documentation to use it. Please document the parameter types, and explain generally what the function is intended to do.

3. **Test your function** - In this project I am using jest for testing. Create a new .test.js file for writing your unit tests in. 
If you need help Jest has nice [Getting Started](https://jestjs.io/docs/en/getting-started.html) guide. You may also look at any of the other tests I have written.
I highly encourage TDD (test driven development) when writing these functions.

5. **Add a named export in index.js** - This method should be importable as a named import from the package. In order to do that, each 
function should be exported in index.ts.

4. **Write Neat Code** - I have connected [my eslint configuration](https://www.npmjs.com/package/eslint-config-benblais) to this to enforce language
 formatting and a check is run on pull requests. The code should be neat and have good naming of variables, arguments and functions.