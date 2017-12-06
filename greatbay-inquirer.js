var fs = require('fs');
var inquirer = require('inquirer');
var items = require('great-bay-functions')

var user = new User;

if (process.argv[2] === "post-an-item"){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Great-Bay username?',
            name: 'username'
        }
    ]).then(function (inquirerResponse){
console.log("You've signed in as: " + user),
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your item?',
        name: 'item-name'
    },
    {
        type: 'input',
        message: 'much is your item worth?',
        name: 'item-category'
    },
    {
        type: 'input',
        message: 'where would you like the bid to start?',
        name: 'item-value'
    }].then(function (inquirerResponse){
        import {postItem} from items;
    })
)}
)} if (process.argv[2] === 'bid-on-item') {
    inquirer.prompt({
        type: 'input',
        message: 'What kind of item?',
        name: 'categorySearch'

    }).then(function (inquirerResponse) {

        import {postItem} from items;

    }},