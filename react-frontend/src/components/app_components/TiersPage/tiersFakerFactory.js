
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
tierName: faker.lorem.sentence(""),
storage: faker.lorem.sentence(""),
ram: faker.lorem.sentence(""),
vCpu: faker.lorem.sentence(""),
basePrice: faker.lorem.sentence(""),
markedUpPrice: faker.lorem.sentence(""),
finalPrice: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
