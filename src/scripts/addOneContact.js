import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

// export const addOneContact = async () => {
//     const contacts = await readContacts();
//     const newContact = createFakeContact();
//     await writeContacts([...contacts, newContact]);
// };

// addOneContact();
export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();
        const currentContacts = await readContacts();
        currentContacts.push(newContact);
        await writeContacts(currentContacts);
        console.log(`Done!One new contact hac been added!`);
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
