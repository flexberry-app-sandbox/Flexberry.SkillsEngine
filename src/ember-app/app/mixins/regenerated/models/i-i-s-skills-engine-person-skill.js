import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  approvedAt: DS.attr('date'),
  skill: DS.belongsTo('i-i-s-skills-engine-skill', { inverse: null, async: false }),
  person: DS.belongsTo('i-i-s-skills-engine-person', { inverse: 'skills', async: false })
});

export let ValidationRules = {
  approvedAt: {
    descriptionKey: 'models.i-i-s-skills-engine-person-skill.validations.approvedAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  skill: {
    descriptionKey: 'models.i-i-s-skills-engine-person-skill.validations.skill.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  person: {
    descriptionKey: 'models.i-i-s-skills-engine-person-skill.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonSkillE', 'i-i-s-skills-engine-person-skill', {
    approvedAt: attr('Approved at', { index: 0 }),
    skill: belongsTo('i-i-s-skills-engine-skill', 'Skill', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
