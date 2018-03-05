# Build Client App

## Angular

_Scroll down for React..._

Use Angular to build out a front end for GoalPosts.

In the client directory, you are provided with some authentication-related code. Ignore this as you work towards a MVP. Focus on building out views that show a list of all your goals and a form for adding goals.

NOTE: Avoid spending any time on styling. Your goal is to create a functioning app. Only think about presentation once you have completed all the required functionality.

### Bare Minimum Requirements

- [ ] Complete index.html to include all the scripts you require to run your app
- [ ] Explore the client directory and get familiar with what each file is responsible for
  - Add all the modules as dependencies in app.js
- [ ] Complete the goals-service with $http requests.
- [ ] Build out the following views and controllers:
  - goals.html and goals-controller.js
  - detail.html and detail-controller.js
  - goal-form.html and goal-form-controller.js
- [ ] Add your front end routes in the app config.

### Tips:

- Test your views and controllers by loading the app. Since there is no authentication yet you should be able to freely navigate between views.

## React

Use React to build out a front end for GoalPosts.

Focus on building out views that show a list of all your goals and a form for adding goals. 

NOTE: Avoid spending any time on styling. Your goal is to create a functioning app. Only think about presentation once you have completed all the required functionality.

### Bare Minimum Requirements

- [ ] Explore the client directory and get familiar with what each file is responsible for
  - Add import/exports wherever necessary
- [ ] Convert the app component to a stateful component
  - [ ] Write any methods you need to sync data between components, app, and the server
- [ ] Build out the following components:
  - [ ] A Goals list-view
  - [ ] A new Goals form
  - [ ] A Goal Detail view which shows the details of a particular goal (this could be a separate page of just a modal)
- [ ] Incorporate a router (this will include installing dependencies)

### Tips:

- Test your views and controllers by loading the app. Since there is no authentication yet you should be able to freely navigate between views.
