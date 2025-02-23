import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8', });
        const contacts = JSON.parse(data);
        return contacts.reduce((total, contact) => { return total + 1; }, 0);
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
