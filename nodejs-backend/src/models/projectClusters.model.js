module.exports = function (app) {
  const modelName = "project_clusters";
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
      clusterName: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "cluster_name, p, false, true, true, true, true, true, true, , , , ,",
      },
      tierName: {
        type: String,
        maxLength: 150,
        index: true,
        trim: true,
        comment:
          "tier_name, p, false, true, true, true, true, true, true, , , , ,",
      },
      provider: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "provider, p, false, true, true, true, true, true, true, , , , ,",
      },
      region: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "region, p, false, true, true, true, true, true, true, , , , ,",
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
