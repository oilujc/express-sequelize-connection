'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversation.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    external_id: DataTypes.STRING,
    contact_id: DataTypes.STRING,
    status: DataTypes.STRING,
    to: DataTypes.STRING,
    last_received_datetime: DataTypes.DATE,
    current_vacancyapply_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: 'whatsapp_conversation',
  });
  return Conversation;
};


// userdjango  = models.OneToOneField(UserDjango, verbose_name=_("users"), on_delete=models.CASCADE)
//     external_id = models.CharField(max_length=50) # messagebird id
//     contact_id  = models.CharField(max_length=50)
//     status      = models.CharField(max_length=50)
//     to    = models.CharField(max_length=50) #+573014383444
//     #from_number = models.CharField(max_length=50) #+573045712558",
//     last_received_datetime = models.DateTimeField(null=True, blank=True)
//     last_used_channel_id   = models.CharField(max_length=50, null=True, blank=True)
//     last_time_vacancyapply_sended = models.DateTimeField(null=True, blank=True)
//     current_vacancyapply = models.OneToOneField('searches.VacancyApply', null=True, blank=True, on_delete=models.CASCADE, editable=False)