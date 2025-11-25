const assert = require("assert");
const app = require("../../src/app");

describe("projectEnv service", () => {
  let thisService;
  let projectEnvCreated;

  beforeEach(async () => {
    thisService = await app.service("projectEnv");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (projectEnv)");
  });

  describe("#create", () => {
    const options = {"env":"new value","envName":"new value"};

    beforeEach(async () => {
      projectEnvCreated = await thisService.create(options);
    });

    it("should create a new projectEnv", () => {
      assert.strictEqual(projectEnvCreated.env, options.env);
assert.strictEqual(projectEnvCreated.envName, options.envName);
    });
  });

  describe("#get", () => {
    it("should retrieve a projectEnv by ID", async () => {
      const retrieved = await thisService.get(projectEnvCreated._id);
      assert.strictEqual(retrieved._id, projectEnvCreated._id);
    });
  });

  describe("#update", () => {
    let projectEnvUpdated;
    const options = {"env":"updated value","envName":"updated value"};

    beforeEach(async () => {
      projectEnvUpdated = await thisService.update(projectEnvCreated._id, options);
    });

    it("should update an existing projectEnv ", async () => {
      assert.strictEqual(projectEnvUpdated.env, options.env);
assert.strictEqual(projectEnvUpdated.envName, options.envName);
    });
  });

  describe("#delete", () => {
  let projectEnvDeleted;
    beforeEach(async () => {
      projectEnvDeleted = await thisService.remove(projectEnvCreated._id);
    });

    it("should delete a projectEnv", async () => {
      assert.strictEqual(projectEnvDeleted._id, projectEnvCreated._id);
    });
  });
});