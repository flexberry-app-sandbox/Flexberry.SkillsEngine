import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Skills engine',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Skills engine',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Skills engine',
          title: 'Skills engine'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'skills-engine': {
          caption: 'SkillsEngine',
          title: 'SkillsEngine',
          'i-i-s-skills-engine-skill-l': {
            caption: 'Skill',
            title: ''
          },
          'i-i-s-skills-engine-person-l': {
            caption: 'Person',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-skills-engine-person-l': IISSkillsEnginePersonLForm,
    'i-i-s-skills-engine-skill-l': IISSkillsEngineSkillLForm,
    'i-i-s-skills-engine-person-e': IISSkillsEnginePersonEForm,
    'i-i-s-skills-engine-skill-e': IISSkillsEngineSkillEForm
  },

});

export default translations;
