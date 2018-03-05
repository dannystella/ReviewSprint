# Complete Routes

In this sprint, set up a server which will serve up the client application and provide an api for the creation and updating of Goals.

## Bare Minimum Requirements

- [ ] Set up static file service in server.js and make sure you are serving the contents of the client directory.
  - Make sure you have also set up service of modules installed via npm.
  - TIP: If you are unable to figure out how to serve Node modules, you may use CDNs to load libraries like Angular during the next sprint.
- [ ] Import models into routes.js
- [ ] Build out the following routes:

| method | url | description |
| :------------- | :------------- | :------------- |
| GET | /goals | Returns an array of all Goal titles and ids |
| POST | /goals | Adds a new Goal to the Goals table |
| GET | /goals/:id | Returns details of a single Goal |

- [ ] Implement at least two tests in server-spec.js. You may use the example test to guide you.

### Tips
- Test whether your server behaves as expected in Postman.
- When creating Goals, you can initially enter some placeholder text for the username.
  - You will be able to use actual usernames once authentication has been set up.
