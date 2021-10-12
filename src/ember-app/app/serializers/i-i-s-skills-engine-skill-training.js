import { Serializer as SkillTrainingSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skills-engine-skill-training';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SkillTrainingSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
