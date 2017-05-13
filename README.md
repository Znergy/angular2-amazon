# Amazon
#### Author: Ryan Jones
#### Version: 04/12/2017

## Description 
This project was built utilizing Angular 2, Firebase, and RESTful routing. I choose to simulate the functionality of Amazon because it's always been interesting to me how everything works together. There was a lot of pre-planning involved to wrap my head around how Amazon works, then how that translates into angular 2 and TypeScript.

## Hosted documentation
https://local-zoo.firebaseapp.com/

## Project Requirements
* npm (node package manager) ($ brew install -g node)
* bower (front-end dependencies) ($ npm install -g bower)
* firebase (backend database/hosting/authentication)
* angular cli (front-end framework)($ npm install -g angular-cli)

## General Setup
* npm install
* bower install
* setup firebase
* ng serve

## Firebase Setup

* Create an account with Firebase
* Create a new project
* Setup firebase for a web application
* Create a file called, api-keys.ts, in the app directory (app/api-keys.ts)
* Copy the example code below, and add in your credentials
* Once the api-keys.ts file is setup, you need to import the file into app.module.ts

## Firebase api-keys.ts code
```
export var masterFirebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxx"
};
```

## Technologies Used

* [Angular 2]
* [Node.js]
* [REST]
* [Firebase]
* [JavaScript]
* [HTML]
* [CSS]

## License

This project is licensed under the MIT License - [license]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE

Copyright (c) 2017 Local Zoo

[Angular 2]: https://angular.io/
[Node.js]: https://nodejs.org/en/
[REST]: https://en.wikipedia.org/wiki/Representational_state_transfer
[Firebase]: https://firebase.google.com/
[JavaScript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[HTML]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]: https://developer.mozilla.org/en-US/docs/Web/CSS
