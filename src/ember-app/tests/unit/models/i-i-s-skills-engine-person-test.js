import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-skills-engine-person', 'Unit | Model | i-i-s-skills-engine-person', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-skills-engine-person-skill',
    'model:i-i-s-skills-engine-person',
    'model:i-i-s-skills-engine-skill-training',
    'model:i-i-s-skills-engine-skill',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
