import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.skills-engine.caption'),
          title: i18n.t('forms.application.sitemap.skills-engine.title'),
          children: [{
            link: 'i-i-s-skills-engine-skill-l',
            caption: i18n.t('forms.application.sitemap.skills-engine.i-i-s-skills-engine-skill-l.caption'),
            title: i18n.t('forms.application.sitemap.skills-engine.i-i-s-skills-engine-skill-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-skills-engine-person-l',
            caption: i18n.t('forms.application.sitemap.skills-engine.i-i-s-skills-engine-person-l.caption'),
            title: i18n.t('forms.application.sitemap.skills-engine.i-i-s-skills-engine-person-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})