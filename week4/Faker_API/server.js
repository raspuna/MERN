const express = require('express')
const { faker } = require('@faker-js/faker');
const { application } = require('express');

const app = express();
const PORT = 8000;

function createUser(){
    return {
        id:faker.datatype.uuid(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.phoneNumber(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName()
    }
}

function createCompany(){
    return {
        id:faker.datatype.uuid(),
        name:faker.company.companyName(),
        address:{
            street:faker.address.streetAddress(),
            city:faker.address.cityName(),
            state:faker.address.stateAbbr(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}
console.log(createUser());
console.log(createCompany());

app.listen(PORT, () => {

})
app.get("/api/users/new", (req, res)=>{
    res.json(createUser());
})
app.get("/api/companies/new", (req, res)=>{
    res.json(createCompany());
})
app.get("/api/user/company", (req, res)=>{
    res.json({user:createUser(),company:createCompany() });
})
