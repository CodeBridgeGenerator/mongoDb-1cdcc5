import { faker } from "@faker-js/faker";
export default (user, count) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const fake = {
      projectId: faker.lorem.sentence(1),
      tierName: faker.lorem.sentence(1),
      billingCycle: faker.lorem.sentence(1),
      status: faker.lorem.sentence(1),
      invoiceId: faker.lorem.sentence(1),

      updatedBy: user._id,
      createdBy: user._id,
    };
    data = [...data, fake];
  }
  return data;
};
