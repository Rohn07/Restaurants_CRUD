# Restaurants

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## More Information

This site is deployed at https://restaurantscrud.netlify.app/
To successfully fetch the data and use the proper functionality. One need to have JSON server installed into there systems.

To install JSON Server into your systems.
``` npm install -g json-server ```

After Installations, go the folder location where you need to store the file. Create a JSON file with some data and save it with the name of **db.json**.
```json
{
  "restaurants": [
    {
      "id": 1,
      "name": "KFC",
      "address": "Kalawad Road, Rajkot",
      "email": "rajkot@kfc.com"
    }
  ],
  "users": [
    {
      "name": "user1",
      "email": "user1@test.com",
      "password": "123456",
      "id": 1
    }
  ]
}
```

To start the server.

```json-server --watch db.json```

Now if we go to our browser on the following address, we can see the JSON.

http://localhost:3000/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
