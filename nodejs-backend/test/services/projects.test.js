const assert = require("assert");
const app = require("../../src/app");

describe("projects service", () => {
  let thisService;
  let projectCreated;

  beforeEach(async () => {
    thisService = await app.service("projects");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (projects)");
  });

  describe("#create", () => {
    const options = {"projectID":"new value","projectTitle":"new value","projectDescription":"new value"};

    beforeEach(async () => {
      projectCreated = await thisService.create(options);
    });

    it("should create a new project", () => {
      assert.strictEqual(projectCreated.projectID, options.projectID);
assert.strictEqual(projectCreated.projectTitle, options.projectTitle);
assert.strictEqual(projectCreated.projectDescription, options.projectDescription);
    });
  });

  describe("#get", () => {
    it("should retrieve a project by ID", async () => {
      const retrieved = await thisService.get(projectCreated._id);
      assert.strictEqual(retrieved._id, projectCreated._id);
    });
  });

  describe("#update", () => {
    let projectUpdated;
    const options = {"projectID":"updated value","projectTitle":"updated value","projectDescription":"updated value"};

    beforeEach(async () => {
      projectUpdated = await thisService.update(projectCreated._id, options);
    });

    it("should update an existing project ", async () => {
      assert.strictEqual(projectUpdated.projectID, options.projectID);
assert.strictEqual(projectUpdated.projectTitle, options.projectTitle);
assert.strictEqual(projectUpdated.projectDescription, options.projectDescription);
    });
  });

  describe("#delete", () => {
  let projectDeleted;
    beforeEach(async () => {
      projectDeleted = await thisService.remove(projectCreated._id);
    });

    it("should delete a project", async () => {
      assert.strictEqual(projectDeleted._id, projectCreated._id);
    });
  });
});