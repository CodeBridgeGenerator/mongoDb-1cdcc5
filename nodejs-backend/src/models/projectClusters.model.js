
    module.exports = function (app) {
        const modelName = "project_clusters";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "Project ID, dropdown, false, true, true, true, true, true, true, projects, projects, one-to-one, projectID," },
clusterName: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Cluster Name, p, false, true, true, true, true, true, true, , , , ," },
tierName: { type:  String , maxLength: 150, index: true, trim: true, comment: "Tier Name, p, false, true, true, true, true, true, true, , , , ," },
provider: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Provider, p, false, true, true, true, true, true, true, , , , ," },
region: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Region, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Status, p, false, true, true, true, true, true, true, , , , ," },

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