import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-skills-engine-person-l');
  this.route('i-i-s-skills-engine-person-e',
  { path: 'i-i-s-skills-engine-person-e/:id' });
  this.route('i-i-s-skills-engine-person-e.new',
  { path: 'i-i-s-skills-engine-person-e/new' });
  this.route('i-i-s-skills-engine-skill-l');
  this.route('i-i-s-skills-engine-skill-e',
  { path: 'i-i-s-skills-engine-skill-e/:id' });
  this.route('i-i-s-skills-engine-skill-e.new',
  { path: 'i-i-s-skills-engine-skill-e/new' });
});

export default Router;
