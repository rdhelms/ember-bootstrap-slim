ember-bootstrap-slim
==============================================================================

A tiny Ember addon to add Bootstrap to your Ember app. Nothing more, nothing less.

What you get:

* Bootstrap's minified css added to your app's vendor.css

Versions
------------------------------------------------------------------------------

* Bootstrap: 4.0.0
* Ember CLI: 3.0.1

Installation
------------------------------------------------------------------------------

```
ember install ember-bootstrap-slim
```


Usage
------------------------------------------------------------------------------

1. Install via `ember install ember-bootstrap-slim`.
2. Add bootstrap classes to your html / hbs elements.
3. Look at the pretty things.

Quick Example Walkthrough
------------------------------------------------------------------------------

1. Install ember-cli
    ```
    npm install -g ember-cli@latest
    ```
2. Create a new ember app
    ```
    ember new ember-example
    ```
3. Install ember-bootstrap-slim
    ```
    ember install ember-bootstrap-slim
    ```
4. Create a new ember component
    ```
    ember g component bootstrap-test
    ```
5. In `app/templates/application.hbs`:
    ```hbs
    <h2 id="title">Welcome to Ember</h2>
    {{bootstrap-test}}
    ```
6. In `app/templates/components/bootstrap-test.hbs`:
    ```hbs
    <button class="btn btn-success">Test Button</button>
    ```
7. Start the server
    ```
    ember s
    ```
8. Visit [http://localhost:4200](http://localhost:4200) to see your bootstrap-styled app.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/rdhelms/ember-bootstrap-slim.git`
* `cd ember-bootstrap-slim`
* `npm install`

### Running the linter

* `npm run lint:js`

### Running tests

* `npm test`

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
