import { moduleForModel, test } from 'ember-qunit';

moduleForModel('yogurt', 'Unit | Model | yogurt', {
  // Specify the other units that are required for this test.
  needs: ['model:flavor']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
