
    module.exports = function (app) {
        const modelName = "tiers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            tierName: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Tier Name, p, false, true, true, true, true, true, true, , , , ," },
storage: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Storage, p, false, true, true, true, true, true, true, , , , ," },
ram: { type:  String , minLength: 1, maxLength: 999, index: true, trim: true, comment: "RAM, p, false, true, true, true, true, true, true, , , , ," },
vCpu: { type:  String , minLength: 1, maxLength: 999, index: true, trim: true, comment: "vCPU, p, false, true, true, true, true, true, true, , , , ," },
basePrice: { type:  String , minLength: 1, maxLength: 999, index: true, trim: true, comment: "Base Price, p, false, true, true, true, true, true, true, , , , ," },
markedUpPrice: { type:  String , minLength: 1, maxLength: 999, index: true, trim: true, comment: "Marked Up Price, p, false, true, true, true, true, true, true, , , , ," },
finalPrice: { type:  String , minLength: 1, maxLength: 999, index: true, trim: true, comment: "Final Price, p, false, true, true, true, true, true, true, , , , ," },

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