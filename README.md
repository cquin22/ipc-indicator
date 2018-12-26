![enter image description here](http://res.cloudinary.com/cristianqr22/image/upload/v1545791339/blue-logo_adp67s.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version ~6.1.5

# Dependencies

- [Nodejs](https://github.com/nodejs/node) 8.9.1
- [Angular-cli](https://github.com/angular/angular-cli) ~6.1.5
- [Angular](https://github.com/angular/angular) ^6.1.0
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/home) v2.0.0
- [Animated CSS](https://daneden.github.io/animate.css/) v3.6.1
- [ng-field-management](https://www.npmjs.com/package/ng-field-management) v1.0.5 (this library was developed by me for the administration of reactive forms in angular)


# Installation

```bash
git clone https://github.com/cquin22/ipc-indicator.git
cd ipc-indicatos
npm install
```

# Users login application

- Admin role  ```email: adminuser@gmail.com password: abc421``` 
- Sales role  ```email: childuser@gmail.com password: 123456``` 

# Development server
Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`, or `ng serve --port 4100` to run application with specific port.  The app will automatically reload if you change any of the source files.

# Deployment in production
Before you must have installed on the machine:
- [Nodejs](https://github.com/nodejs/node) 8.9.1
- [Angular-cli](https://github.com/angular/angular-cli) ~6.0.8


- Run  ```ng build --prod``` 

Then copy everything within the output folder (dist/ipc-indicator by default) to a folder on the server.


# Angular Arquitecture


Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

The basic building blocks of an Angular application are  _NgModules_, which provide a compilation context for  _components_. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a  _root module_  that enables bootstrapping, and typically has many more  _feature modules_.

-   Components define  _views_, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
    
-   Components use  _services_, which provide specific functionality not directly related to views. Service providers can be  _injected_  into components as  _dependencies_, making your code modular, reusable, and efficient.
    
Both components and services are simply classes, with  _decorators_  that mark their type and provide metadata that tells Angular how to use them.

-   The metadata for a component class associates it with a  _template_  that defines a view. A template combines ordinary HTML with Angular  _directives_  and  _binding markup_  that allow Angular to modify the HTML before rendering it for display.
    
-   The metadata for a service class provides the information Angular needs to make it available to components through  _Dependency Injection (DI)_.
    

An app's components typically define many views, arranged hierarchically. Angular provides the  Router  service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

For more information view the [official documentation about Angular architecture](https://angular.io/guide/architecture)

## StyleGuide Angular
To get help on styleguide used go checkout the [Official Angular StyleGuide](https://angular.io/guide/styleguide)


# Project Architecture

- Core 
    - Constant
    - Interfaces
    - Components
    - Enums
    - Services
- Modules
    - Authenticate
    - Dashboard
- Security

The structure of the application is based on 3 modules (Main, Authenticate and Dashboard).

- The Main module is responsible for initiating the application, which together with the route layer, is responsible for determining to which module redirect to the client.

- The Authenticate module is activated when the routing layer detects that no user is allowed to log in, and show views for login and register.

- The Dashboard module is activated when the login module indicates that there's a user logged correctly.

- The core is the set of utilities common to the entire application

- The security package has a series of classes that work as services and interceptors to manage security in the application


## Generating Components, Services and Modules

Scaffold  | Command
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
