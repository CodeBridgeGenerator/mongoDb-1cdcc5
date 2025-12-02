const assert = require("assert");
const app = require("../../src/app");

describe("databaseUser service", () => {
  let thisService;
  let databaseUserCreated;

  beforeEach(async () => {
    thisService = await app.service("databaseUser");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (databaseUser)");
  });

  describe("#create", () => {
    const options = {"userId":"new value","projectId":"aasdfasdfasdfadsfadfa","mongodbUser":"new value","mongodbPassword":"new value","role":"new value"};

    beforeEach(async () => {
      databaseUserCreated = await thisService.create(options);
    });

    it("should create a new databaseUser", () => {
      assert.strictEqual(databaseUserCreated.userId, options.userId);
assert.strictEqual(databaseUserCreated.projectId, options.projectId);
assert.strictEqual(databaseUserCreated.mongodbUser, options.mongodbUser);
assert.strictEqual(databaseUserCreated.mongodbPassword, options.mongodbPassword);
assert.strictEqual(databaseUserCreated.role, options.role);
    });
  });

  describe("#get", () => {
    it("should retrieve a databaseUser by ID", async () => {
      const retrieved = await thisService.get(databaseUserCreated._id);
      assert.strictEqual(retrieved._id, databaseUserCreated._id);
    });
  });

  describe("#update", () => {
    let databaseUserUpdated;
    const options = {"userId":"updated value","projectId":"345345345345345345345","mongodbUser":"updated value","mongodbPassword":"updated value","role":"updated value"};

    beforeEach(async () => {
      databaseUserUpdated = await thisService.update(databaseUserCreated._id, options);
    });

    it("should update an existing databaseUser ", async () => {
      assert.strictEqual(databaseUserUpdated.userId, options.userId);
assert.strictEqual(databaseUserUpdated.projectId, options.projectId);
assert.strictEqual(databaseUserUpdated.mongodbUser, options.mongodbUser);
assert.strictEqual(databaseUserUpdated.mongodbPassword, options.mongodbPassword);
assert.strictEqual(databaseUserUpdated.role, options.role);
    });
  });

  describe("#delete", () => {
  let databaseUserDeleted;
    beforeEach(async () => {
      databaseUserDeleted = await thisService.remove(databaseUserCreated._id);
    });

    it("should delete a databaseUser", async () => {
      assert.strictEqual(databaseUserDeleted._id, databaseUserCreated._id);
    });
  });
});