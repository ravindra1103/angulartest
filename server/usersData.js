import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

let users = [
    {
        id: "0",
        name: "name0",
        surname: "surname0",
        birthDate: "24-8-1981",
        phone: "634523125",
        city: "Wroclaw",
        street: "Mydlana",
        number: "1"
    },
    {
        id: "1",
        name: "name1",
        surname: "surname1",
        birthDate: "28-9-1983",
        phone: "812312312",
        city: "Warsaw",
        street: "Domaniewska",
        number: "2"
    },
    {
        id: "2",
        name: "name2",
        surname: "surname2",
        birthDate: "01-6-1983",
        phone: "987654412",
        city: "Wroclaw",
        street: "Mydlana",
        number: "3"
    },
    {
        id: "3",
        name: "name3",
        surname: "surname3",
        birthDate: "05-5-1978",
        phone: "812312312",
        city: "Wroclaw",
        street: "Himalajska",
        number: "4"
    }
];

app.get('/users', (req, res) => res.json(users));

app.get('/users/user/:id', (req, res) => {
    res.sendStatus(200); 
});

app.delete('/users/user/:id', (req, res) => {
    if(users.find((item) => item.id === req.params.id)) {
        res.sendStatus(204);         
    }else {
        res.sendStatus(404);
    }
});

app.post('/users', (req, res) => {
    res.sendStatus(200); 
});

app.listen(3000, () => console.log('Users app listening on port 3000!'));