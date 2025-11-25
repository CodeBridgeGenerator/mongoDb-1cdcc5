const assert = require("assert");
const app = require("../../src/app");

describe("tiers service", () => {
  let thisService;
  let tierCreated;

  beforeEach(async () => {
    thisService = await app.service("tiers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (tiers)");
  });

  describe("#create", () => {
    const options = {"tierName":"new value","storage":"new value","ram":"new value","vCpu":"new value","basePrice":"new value","markedUpPrice":"new value","finalPrice":"new value"};

    beforeEach(async () => {
      tierCreated = await thisService.create(options);
    });

    it("should create a new tier", () => {
      assert.strictEqual(tierCreated.tierName, options.tierName);
assert.strictEqual(tierCreated.storage, options.storage);
assert.strictEqual(tierCreated.ram, options.ram);
assert.strictEqual(tierCreated.vCpu, options.vCpu);
assert.strictEqual(tierCreated.basePrice, options.basePrice);
assert.strictEqual(tierCreated.markedUpPrice, options.markedUpPrice);
assert.strictEqual(tierCreated.finalPrice, options.finalPrice);
    });
  });

  describe("#get", () => {
    it("should retrieve a tier by ID", async () => {
      const retrieved = await thisService.get(tierCreated._id);
      assert.strictEqual(retrieved._id, tierCreated._id);
    });
  });

  describe("#update", () => {
    let tierUpdated;
    const options = {"tierName":"updated value","storage":"updated value","ram":"updated value","vCpu":"updated value","basePrice":"updated value","markedUpPrice":"updated value","finalPrice":"updated value"};

    beforeEach(async () => {
      tierUpdated = await thisService.update(tierCreated._id, options);
    });

    it("should update an existing tier ", async () => {
      assert.strictEqual(tierUpdated.tierName, options.tierName);
assert.strictEqual(tierUpdated.storage, options.storage);
assert.strictEqual(tierUpdated.ram, options.ram);
assert.strictEqual(tierUpdated.vCpu, options.vCpu);
assert.strictEqual(tierUpdated.basePrice, options.basePrice);
assert.strictEqual(tierUpdated.markedUpPrice, options.markedUpPrice);
assert.strictEqual(tierUpdated.finalPrice, options.finalPrice);
    });
  });

  describe("#delete", () => {
  let tierDeleted;
    beforeEach(async () => {
      tierDeleted = await thisService.remove(tierCreated._id);
    });

    it("should delete a tier", async () => {
      assert.strictEqual(tierDeleted._id, tierCreated._id);
    });
  });
});