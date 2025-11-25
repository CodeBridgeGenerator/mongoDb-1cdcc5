
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
tierName: faker.lorem.sentence(1),
storage: faker.lorem.sentence(1),
ram: faker.lorem.sentence(1),
vCpu: faker.lorem.sentence(1),
basePrice: faker.lorem.sentence(1),
markedUpPrice: faker.lorem.sentence(1),
finalPrice: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
