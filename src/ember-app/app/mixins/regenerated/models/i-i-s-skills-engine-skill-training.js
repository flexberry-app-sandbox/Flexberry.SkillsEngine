import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  url: DS.attr('string'),
  skill: DS.belongsTo('i-i-s-skills-engine-skill', { inverse: 'educationalMaterials', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-skills-engine-skill-training.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  url: {
    descriptionKey: 'models.i-i-s-skills-engine-skill-training.validations.url.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  skill: {
    descriptionKey: 'models.i-i-s-skills-engine-skill-training.validations.skill.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SkillTrainingE', 'i-i-s-skills-engine-skill-training', {
    name: attr('Name', { index: 0 }),
    url: attr('Url', { index: 1 })
  });
};
