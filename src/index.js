import { Contact, ContactList } from './ContactList';

let jammes = new Contact({
    name:"Shaza"
});

let contacts = new ContactList("./src/contacts.json");
//contacts.addContact(jammes);

contacts.load()
.then(() =>{
    contacts.addContact(jammes);
    console.log(contacts);
});
