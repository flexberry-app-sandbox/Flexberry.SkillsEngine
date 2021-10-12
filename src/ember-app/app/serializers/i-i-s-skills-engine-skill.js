import { Serializer as SkillSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skills-engine-skill';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SkillSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
