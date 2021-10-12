import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  parentSkill: DS.belongsTo('i-i-s-skills-engine-skill', { inverse: null, async: false }),
  educationalMaterials: DS.hasMany('i-i-s-skills-engine-skill-training', { inverse: 'skill', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-skills-engine-skill.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-skills-engine-skill.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parentSkill: {
    descriptionKey: 'models.i-i-s-skills-engine-skill.validations.parentSkill.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  educationalMaterials: {
    descriptionKey: 'models.i-i-s-skills-engine-skill.validations.educationalMaterials.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SkillE', 'i-i-s-skills-engine-skill', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    parentSkill: belongsTo('i-i-s-skills-engine-skill', 'Parent skill', {
      name: attr('Name', { index: 3 })
    }, { index: 2, displayMemberPath: 'name' }),
    educationalMaterials: hasMany('i-i-s-skills-engine-skill-training', 'Educational materials', {
      name: attr('Name', { index: 0 }),
      url: attr('Url', { index: 1 })
    })
  });

  modelClass.defineProjection('SkillL', 'i-i-s-skills-engine-skill', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    parentSkill: belongsTo('i-i-s-skills-engine-skill', 'Name', {

    }, { index: 2, hidden: true })
  });
};
