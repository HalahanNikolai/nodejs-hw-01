import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const contacts = await readContacts();
    const radomContacts = Array.from({ length: number }, () => createFakeContact());
    await writeContacts([...contacts, ...radomContacts]);
};

generateContacts(5);
