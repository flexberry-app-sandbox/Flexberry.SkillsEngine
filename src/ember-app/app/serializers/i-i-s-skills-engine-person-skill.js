import { Serializer as PersonSkillSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skills-engine-person-skill';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonSkillSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
