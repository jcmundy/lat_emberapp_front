# latteria-front

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

```
Notes

in routes.rb add
   namespace :admin do
      resources :invitations
   end

install ember-crumbly

touch app/controllers/admin/invitations_controller.rb
	- copy contents of controllers/invitations_controller.rb change 1st line to: 
	class Admin::InvitationsController < ApplicationController

Requires gem 'jsonapi-resources'
Requires in package.json     "ember-data-has-many-query": "^0.2.0",

Remember to add 
import AdminModelMixin from 'ember-admin/mixins/admin-model-mixin';
and
export default DS.Model.extend(AdminModelMixin, {
to the models.

Remember to add
import AdminAdapterMixin from 'ember-admin/mixins/admin-adapter-mixin';

const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend(AdminAdapterMixin, {

to the application.js
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd latteria-front`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
