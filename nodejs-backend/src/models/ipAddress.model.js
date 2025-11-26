module.exports = function (app) {
  const modelName = "ip_address";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      projectId: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "project_id, p, false, true, true, true, true, true, true, , , , ,",
      },
      ipAddress: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "ip_address, p, false, true, true, true, true, true, true, , , , ,",
      },
      status: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "status, p, false, true, true, true, true, true, true, , , , ,",
      },

      createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
      updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    },
    {
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
