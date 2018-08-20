import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)


class Contact{
    constructor(obj){
        //console.log("here is my ContactList !!");
        if(!obj) 
            throw "Need an object to instantiate contact class.";
      
        this.name = obj.name;
        this.phone = obj.phone;
    }
    set name(name){
        if(!name)
            throw "contact class needs a name property";
        
        if(typeof name !== "string")
            throw "the name should be a string, :-)";    
        this._name = name;
    }

    get name(){
        return this._name;
    }

    toJSON(){
        return {
            name: this._name,
            phone: this.phone
        };
    }
};

class ContactList{
    constructor(filename){
        this.list = [];
        this.filename = filename;
    }
    addContact(contact){
        this.list.push(contact);
    }
    load(){
        return readFile(this.filename, "utf8")
        .then(fileString =>{
            //console.log(fileString);
            JSON.parse(fileString)
            .forEach(contact => 
               this.addContact(contact));
        });
    }

    save(){
        return writeFile(
            this.filename,
            JSON.stringify(this.list),
            "utf8"
        )

    }
}

export {Contact, ContactList};