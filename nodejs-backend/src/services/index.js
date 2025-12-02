
const tiers = require("./tiers/tiers.service.js");
const projectEnv = require("./projectEnv/projectEnv.service.js");
const projectClusters = require("./projectClusters/projectClusters.service.js");
const ipAddress = require("./ipAddress/ipAddress.service.js");
const billing = require("./billing/billing.service.js");
const databaseUser = require("./databaseUser/databaseUser.service.js");
const projects = require("./projects/projects.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(tiers);
  app.configure(projectEnv);
  app.configure(projectClusters);
  app.configure(ipAddress);
  app.configure(billing);
  app.configure(databaseUser);
  app.configure(projects);
    // ~cb-add-configure-service-name~
};
