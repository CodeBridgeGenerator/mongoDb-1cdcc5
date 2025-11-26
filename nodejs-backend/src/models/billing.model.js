module.exports = function (app) {
  const modelName = "billing";
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
      tierName: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "tier_name, p, false, true, true, true, true, true, true, , , , ,",
      },
      billingCycle: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "billing_cycle, p, false, true, true, true, true, true, true, , , , ,",
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
      invoiceId: {
        type: String,
        minLength: 2,
        maxLength: 999,
        index: true,
        trim: true,
        comment:
          "invoice_id, p, false, true, true, true, true, true, true, , , , ,",
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
