import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flavor', 'Unit | Model | flavor', {
  // Specify the other units that are required for this test.
  needs: ['model:gelato', 'model:yogurt']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
