const assert = require("assert");
const app = require("../../src/app");

describe("ipAddress service", () => {
  let thisService;
  let ipAddressCreated;

  beforeEach(async () => {
    thisService = await app.service("ipAddress");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (ipAddress)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","ipAddress":"new value","status":"new value"};

    beforeEach(async () => {
      ipAddressCreated = await thisService.create(options);
    });

    it("should create a new ipAddress", () => {
      assert.strictEqual(ipAddressCreated.projectId, options.projectId);
assert.strictEqual(ipAddressCreated.ipAddress, options.ipAddress);
assert.strictEqual(ipAddressCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a ipAddress by ID", async () => {
      const retrieved = await thisService.get(ipAddressCreated._id);
      assert.strictEqual(retrieved._id, ipAddressCreated._id);
    });
  });

  describe("#update", () => {
    let ipAddressUpdated;
    const options = {"projectId":"345345345345345345345","ipAddress":"updated value","status":"updated value"};

    beforeEach(async () => {
      ipAddressUpdated = await thisService.update(ipAddressCreated._id, options);
    });

    it("should update an existing ipAddress ", async () => {
      assert.strictEqual(ipAddressUpdated.projectId, options.projectId);
assert.strictEqual(ipAddressUpdated.ipAddress, options.ipAddress);
assert.strictEqual(ipAddressUpdated.status, options.status);
    });
  });

  describe("#delete", () => {
  let ipAddressDeleted;
    beforeEach(async () => {
      ipAddressDeleted = await thisService.remove(ipAddressCreated._id);
    });

    it("should delete a ipAddress", async () => {
      assert.strictEqual(ipAddressDeleted._id, ipAddressCreated._id);
    });
  });
});