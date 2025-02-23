import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const sliceContact = contacts.slice(0, -1);
    await writeContacts(sliceContact);
};

removeLastContact();
