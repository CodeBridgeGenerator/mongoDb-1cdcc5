const assert = require("assert");
const app = require("../../src/app");

describe("projectClusters service", () => {
  let thisService;
  let projectClusterCreated;

  beforeEach(async () => {
    thisService = await app.service("projectClusters");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (projectClusters)");
  });

  describe("#create", () => {
    const options = {"projectId":"aasdfasdfasdfadsfadfa","clusterName":"new value","tierName":"new value","provider":"new value","region":"new value","status":"new value"};

    beforeEach(async () => {
      projectClusterCreated = await thisService.create(options);
    });

    it("should create a new projectCluster", () => {
      assert.strictEqual(projectClusterCreated.projectId, options.projectId);
assert.strictEqual(projectClusterCreated.clusterName, options.clusterName);
assert.strictEqual(projectClusterCreated.tierName, options.tierName);
assert.strictEqual(projectClusterCreated.provider, options.provider);
assert.strictEqual(projectClusterCreated.region, options.region);
assert.strictEqual(projectClusterCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a projectCluster by ID", async () => {
      const retrieved = await thisService.get(projectClusterCreated._id);
      assert.strictEqual(retrieved._id, projectClusterCreated._id);
    });
  });

  describe("#update", () => {
    let projectClusterUpdated;
    const options = {"projectId":"345345345345345345345","clusterName":"updated value","tierName":"updated value","provider":"updated value","region":"updated value","status":"updated value"};

    beforeEach(async () => {
      projectClusterUpdated = await thisService.update(projectClusterCreated._id, options);
    });

    it("should update an existing projectCluster ", async () => {
      assert.strictEqual(projectClusterUpdated.projectId, options.projectId);
assert.strictEqual(projectClusterUpdated.clusterName, options.clusterName);
assert.strictEqual(projectClusterUpdated.tierName, options.tierName);
assert.strictEqual(projectClusterUpdated.provider, options.provider);
assert.strictEqual(projectClusterUpdated.region, options.region);
assert.strictEqual(projectClusterUpdated.status, options.status);
    });
  });

  describe("#delete", () => {
  let projectClusterDeleted;
    beforeEach(async () => {
      projectClusterDeleted = await thisService.remove(projectClusterCreated._id);
    });

    it("should delete a projectCluster", async () => {
      assert.strictEqual(projectClusterDeleted._id, projectClusterCreated._id);
    });
  });
});