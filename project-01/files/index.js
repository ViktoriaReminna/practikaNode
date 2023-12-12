console.log("Alex")

const path = require('path')
const fs = require('fs/promises')

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join());
// console.log(path.resolve());

//magic node.js
//path.join(__dirname);

const usersPath = path.join(__dirname, '..', 'db', 'users.json');

// console.log(usersPath);

class FileOperations {
    constructor(path) {
        this.path = path;
    }

    async read() {
        const data = await fs.readFile(this.path)
        return JSON.parse(data)
    }

    async display() {
        const users = await this.read()
        console.table(users)
        return true;
    }

    async create(data) {
        const dataString = JSON.stringify(data, null, 2);
        return await fs.writeFile(this.path, dataString);
    }

    async remove(data) {
        return await fs.unlink(this.path)
    }

    async update(data) {
        const users = await this.read()
        users.push(data)
        const dataString = JSON.stringify(users, null, 2);
        return await fs.writeFile(this.path, dataString);
    }

    async updateOne(id, newUserName) {
        const users = await this.read()
        const idx = users.findIndex((itm)=> itm.id === id)
        console.log(idx);
        if(idx === -1) {
            console.log(`User with id ${id} not found`)
            return false
        }
        users[idx].name =  newUserName;
        const dataString = JSON.stringify(users, null, 2);
        return await fs.writeFile(this.path, dataString);
    }

    async removeOne(id, newUserName) {
        const users = await this.read()
        const idx = users.findIndex((itm)=> itm.id === id)
        console.log(idx);
        if(idx === -1) {
            console.log(`User with id ${id} not found`)
            return false
        }
        users.splice(idx, 1)
        const dataString = JSON.stringify(users, null, 2);
        return await fs.writeFile(this.path, dataString);
    }
}

const file = new FileOperations(usersPath);


//CRUD
// file.read() //зчитує вміст файла users.json
// file.display() //віводить в консолі зміст файла users.json

const users = [
    {
        "id": "1",
        "name": "Alex"
    },
    {
        "id": "2",
        "name": "Kostia"
    },
    {
        "id": "3",
        "name": "Nastia"
    },
    {
        "id": "4",
        "name": "Viktoria"
    }
];
file.create(users) //повністтю створює з нуля файл users.json
// file.remove() //повністтю видаляє файл users.json
// file.update({"id": "5", "name": "Andri"}) //додає в кінець масиву нового користувача
// file.updateOne('100', 'Nastia++') //шукає користувача по id і змінює йому імʼя на нове
// file.removeOne('3') //шукає користувача по id і удаляє цоьго користувача з масиву



