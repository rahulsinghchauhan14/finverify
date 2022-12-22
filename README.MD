# npm publish

# tsc index.ts

```
To use your library in another project, you can install it by running npm install <library-name> and then import the functions you want to use in your TypeScript code, like this:
```
```
import { isEmail } from "<library-name>";

const email = "someone@example.com";
if (isEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
```