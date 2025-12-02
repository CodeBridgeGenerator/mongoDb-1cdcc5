const assert = require("assert");
const app = require("../../src/app");

describe("billing service", () => {
  let thisService;
  let billingCreated;

  beforeEach(async () => {
    thisService = await app.service("billing");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (billing)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","tierName":"new value","billingCycle":"new value","status":"new value","invoiceId":"new value"};

    beforeEach(async () => {
      billingCreated = await thisService.create(options);
    });

    it("should create a new billing", () => {
      assert.strictEqual(billingCreated.projectId, options.projectId);
assert.strictEqual(billingCreated.tierName, options.tierName);
assert.strictEqual(billingCreated.billingCycle, options.billingCycle);
assert.strictEqual(billingCreated.status, options.status);
assert.strictEqual(billingCreated.invoiceId, options.invoiceId);
    });
  });

  describe("#get", () => {
    it("should retrieve a billing by ID", async () => {
      const retrieved = await thisService.get(billingCreated._id);
      assert.strictEqual(retrieved._id, billingCreated._id);
    });
  });

  describe("#update", () => {
    let billingUpdated;
    const options = {"projectId":"345345345345345345345","tierName":"updated value","billingCycle":"updated value","status":"updated value","invoiceId":"updated value"};

    beforeEach(async () => {
      billingUpdated = await thisService.update(billingCreated._id, options);
    });

    it("should update an existing billing ", async () => {
      assert.strictEqual(billingUpdated.projectId, options.projectId);
assert.strictEqual(billingUpdated.tierName, options.tierName);
assert.strictEqual(billingUpdated.billingCycle, options.billingCycle);
assert.strictEqual(billingUpdated.status, options.status);
assert.strictEqual(billingUpdated.invoiceId, options.invoiceId);
    });
  });

  describe("#delete", () => {
  let billingDeleted;
    beforeEach(async () => {
      billingDeleted = await thisService.remove(billingCreated._id);
    });

    it("should delete a billing", async () => {
      assert.strictEqual(billingDeleted._id, billingCreated._id);
    });
  });
});