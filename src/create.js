import { users } from "./data";

const cont = document.querySelector("#container");

export function create() {
    for (let i = 0; i < users.length; i++) {
        cont.innerHTML  += `
            <ol>
                <li>Id: ${users[i].id}</li>
                <li>Name : ${users[i].name}</li>
                <li>Email: ${users[i].email}</li>
                <li>Country : ${users[i].country}</li>
                <li>Company : ${users[i].company}</li>
                <li>Age : ${users[i].age}</li>
                <li>Birthday : ${users[i].birthday}</li>
            </ol>
        `
        
    }
    
}