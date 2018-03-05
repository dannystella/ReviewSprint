# Add authentication

In this final section you will use JWTs to implement a full-stack authentication system. JWTs are simply web tokens that are encoded on the server during a login and sent to the client. The client will attach this token as a header in every subsequent request. The server can then check this header and decode it to retrieve the relevant User information and perform actions based on it.

**Note:** If you just want to implement an MVP version of authentication, feel free to use `express-session` instead of JWTs.

## Bare Minimum Requirements

- [ ] [Angular] Uncomment and read the authentication code in client/app.js
- [ ] [React] Write helper functions to check for authentication when a route loads 
  - You will need to use the React-Router-provided `.push` method to navigate away from an unauthorized view when components load
  - You will also need to update all the AJAX requests in the client to send the token to the server. 
- [ ] In routes.js, convert the pseudocode in the authentication routes into working code
- [ ] Update your previous Goal model and /goals routes to save Goals for a specific user
  - Look at the documentation for [jwt-simple](https://www.npmjs.com/package/jwt-simple) to learn how to encode and decode JWTs

## Advanced Content

- Abstract the JWT methods into a separate file called auth-helpers.js
