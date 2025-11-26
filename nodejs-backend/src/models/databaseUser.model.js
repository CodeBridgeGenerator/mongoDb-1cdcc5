module.exports = function (app) {
  const modelName = "database_user";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      userId: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "userId, p, false, true, true, true, true, true, true, , , , ,",
      },
      projectId: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "project_id, p, false, true, true, true, true, true, true, , , , ,",
      },
      mongodbUser: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "mongodb_user, p, false, true, true, true, true, true, true, , , , ,",
      },
      mongodbPassword: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "mongodb_password, p, false, true, true, true, true, true, true, , , , ,",
      },
      role: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment: "role, p, false, true, true, true, true, true, true, , , , ,",
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
