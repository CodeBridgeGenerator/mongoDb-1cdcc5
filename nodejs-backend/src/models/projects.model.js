
    module.exports = function (app) {
        const modelName = "projects";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectID: { type:  String , comment: "Project ID, p, false, true, true, true, true, true, true, , , , ," },
projectTitle: { type:  String , comment: "Project Title, p, false, true, true, true, true, true, true, , , , ," },
projectDescription: { type:  String , comment: "Project Description, p, false, true, true, true, true, true, true, , , , ," },

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