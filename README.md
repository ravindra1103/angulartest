# Angulartest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server
First run `npm install`

After npm install is completed run `npm start` which starts a node server to get the initial data

Then on a different session run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`http://localhost:4200/` will automatically redirected to `http://localhost:4200/home` which is eagarly loaded component

Click on User which takes to `http://localhost:4200/users` lazily loaded users component

In the users page a table with four users will be displayed by default
It has three button controls
1) `Update One` upon click will update the first row item to new data
2) `Update Two Items` upon click will update the second and third row items
3) `Remove` upon click will remove the fourth row in the table

One can refresh the page to load the initial data again

Explaination of the Refractoring done

Refractored below four methods of service calls on users data
1)getAllUsers(): After Http get to get users is successful store the data received from the server in a private varible 
localUsersData and return json array as Observable. We define a getter for this varible so that the user component can always use the getter to get the updated list always
2) getUser(): This function receives userId as input we then use Array.find on the localUsersData and get the corresponding entry
3) removeUser: This function receives userId as input we then use Array.filter on the localUsersData to remove the corresponding entry from the list
4) updateUser: This function either receive an array of users or a single user object based on which we have two cases
    case a)If the input is of type array we use the map method on localUsersData and during the iteration we check if the user is present in the users recived as the input using find. If find returns an object this means we got a new replcement for the data so we return the new data in map to replace the existing one otherwise we return the same item without any modification
    case b)If the input is of single user object while dping map iteration on localUsersData we check the userId of the input user is same as the iterating item userId, if it is same then we return the input user object otherwise we return the current iterating item

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
