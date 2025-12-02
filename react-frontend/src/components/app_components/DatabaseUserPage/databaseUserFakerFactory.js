
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
userId: faker.lorem.sentence(""),
projectId: projectIdIds[i % projectIdIds.length],
mongodbUser: faker.lorem.sentence(""),
mongodbPassword: faker.lorem.sentence(""),
role: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
