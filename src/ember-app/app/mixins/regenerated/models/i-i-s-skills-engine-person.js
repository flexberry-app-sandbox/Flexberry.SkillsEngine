import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  skills: DS.hasMany('i-i-s-skills-engine-person-skill', { inverse: 'person', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-skills-engine-person.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  skills: {
    descriptionKey: 'models.i-i-s-skills-engine-person.validations.skills.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonE', 'i-i-s-skills-engine-person', {
    name: attr('Name', { index: 0 }),
    skills: hasMany('i-i-s-skills-engine-person-skill', 'Skills', {
      approvedAt: attr('Approved at', { index: 0 }),
      skill: belongsTo('i-i-s-skills-engine-skill', 'Skill', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('PersonL', 'i-i-s-skills-engine-person', {
    name: attr('Name', { index: 0 })
  });
};
