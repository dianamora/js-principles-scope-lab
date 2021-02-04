// Write your solution in this file!

//1-customerName: Declare a variable in global scope called customerName using the var keyword
var customerName = 'bob'

//2-upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

//3-setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'
}

//4-overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
  }

//5-leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant in 
//global scope called leastFavoriteCustomer, be sure to assign it some initial value. 
//Ok, now write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant

const leastFavoriteCustomer = 'some inital value'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'
  }