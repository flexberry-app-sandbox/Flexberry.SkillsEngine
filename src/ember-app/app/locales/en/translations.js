import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSkillsEnginePersonLForm from './forms/i-i-s-skills-engine-person-l';
import IISSkillsEngineSkillLForm from './forms/i-i-s-skills-engine-skill-l';
import IISSkillsEnginePersonEForm from './forms/i-i-s-skills-engine-person-e';
import IISSkillsEngineSkillEForm from './forms/i-i-s-skills-engine-skill-e';
import IISSkillsEnginePersonSkillModel from './models/i-i-s-skills-engine-person-skill';
import IISSkillsEnginePersonModel from './models/i-i-s-skills-engine-person';
import IISSkillsEngineSkillTrainingModel from './models/i-i-s-skills-engine-skill-training';
import IISSkillsEngineSkillModel from './models/i-i-s-skills-engine-skill';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-skills-engine-person-skill': IISSkillsEnginePersonSkillModel,
    'i-i-s-skills-engine-person': IISSkillsEnginePersonModel,
    'i-i-s-skills-engine-skill-training': IISSkillsEngineSkillTrainingModel,
    'i-i-s-skills-engine-skill': IISSkillsEngineSkillModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'skills-engine': {
          caption: 'skills-engine',
          title: 'skills-engine',
          'i-i-s-skills-engine-skill-l': {
            caption: 'i-i-s-skills-engine-skill-l',
            title: 'i-i-s-skills-engine-skill-l'
          },
          'i-i-s-skills-engine-person-l': {
            caption: 'i-i-s-skills-engine-person-l',
            title: 'i-i-s-skills-engine-person-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-skills-engine-person-l': IISSkillsEnginePersonLForm,
    'i-i-s-skills-engine-skill-l': IISSkillsEngineSkillLForm,
    'i-i-s-skills-engine-person-e': IISSkillsEnginePersonEForm,
    'i-i-s-skills-engine-skill-e': IISSkillsEngineSkillEForm
  },

});

export default translations;
