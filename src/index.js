import { Contact, ContactList } from './ContactList';

let jammes = new Contact({
    name:"Shaza"
});

let contacts = new ContactList("./src/contacts.json");
//contacts.addContact(jammes);
 let validContact = new Contact({
     name: "some name",
     phone: 12334
    });
 validContact.name= 3;
 console.log(JSON.stringify(validContact));

/*contacts.load()
.then(() =>{
    contacts.addContact(jammes);
    return contacts.save();
    //console.log(contacts);
})
.then(()=>{
    console.log("Contacts save successfully. ")
})
.catch(console.log);*/
