import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-skills-engine-person-skill', 'Unit | Serializer | i-i-s-skills-engine-person-skill', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-skills-engine-person-skill',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
