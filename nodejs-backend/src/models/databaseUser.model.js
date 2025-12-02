
    module.exports = function (app) {
        const modelName = "database_user";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            userId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "User ID, p, false, true, true, true, true, true, true, , , , ," },
projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project ID, dropdown, false, true, true, true, true, true, true, projects, projects, one-to-one, projectID," },
mongodbUser: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "MongoDB User, p, false, true, true, true, true, true, true, , , , ," },
mongodbPassword: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "MongoDB Password, p, false, true, true, true, true, true, true, , , , ," },
role: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Role, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };