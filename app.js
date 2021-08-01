'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const seattle = {
    name: 'seattle',
    /*Stores the min/max hourly 
    customers, and the average 
    cookies per customer, in object 
    properties
*/
    min: 23,
    max: 65,
    avgCusts: 6.3,
    /*Uses a method of that object to 
    generate a random number of customers
     per hour. Objects/Math/random*/
    customRandom: function (min, max) {
        {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

    },
    /*Calculate and store the simulated amounts of cookies purchased for each hour at 
    each location using average cookies 
    purchased and the random number of customers generated*/
    amountOfCookie: function Generate() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCusts * this.customRandom[i];
            return this.amount[i];
        }
    },
    /*Store the results for each location in a separate array… 
    perhaps as a property of the object representing that location
    Location 	Min / Cust 	Max / Cust 	Avg Cookie / Sale*/
    infoArray :function(){return['The location name ' + this.name + ' minimum coustomer per hour is ' + this.min+ ' maximum coustomer per hour is ' + this.max +' Thier average for visitores is '+ this.avgCusts]},

    /*Display the values of each array as unordered lists in the browser*/
disply: function () { [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`] },
    /*Calculating the sum of these hourly totals; your 
    output for each location should look like this:*/
    totaloutput: function () {
        for (let a = 0; a < hours.lenght; a++) {
            let sum = 0;
            sum += this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },

}
console.log(seattle.infoArray());
console.log(seattle);
////////////////////////////////////
const tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avgCustt: 1.2,
    customRandomt: function (min, max) {
        {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
    amountOfCookies: function Generatet() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustt * this.customRandomt[i];
            return this.amount[i];
        }
    },
    infoArray: function(){return [`The location name ${this.name}, minimum coustomer per hour is ${this.min}, maximum coustomer per hour is ${this.max},Ther average for visitores is  ${this.avgCustt}`]},
    disply: function () { return [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`] },
}
console.log(tokyo);
console.log(tokyo.infoArray())
/////////////////////////////////////////
let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgCustd: 3.7,
    customRandomd: function (minC, max) {
        {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    },
    amountOfCookies: function generated() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustd * this.customRandomd[i];
            return this.amount[i];
        }
    },
    infoArray: function(){return [`The location name ${this.name}, minimum coustomer per hour is ${this.min}, maximum coustomer per hour is ${this.max},Ther average for visitores is  ${this.avgCustd}`]},
    disply: function () { return [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`] },

    totaloutpu: function sumout() {
        for (let a = 0; a < hours.lenght; a++) {
            let sum = 0;
            sum += this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
}
console.log(dubai);
console.log(dubai.infoArray());
///////////////////////////////////////
const paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avgCustp: 2.3,
    customRandomp: function (min, max) {
        {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
    amountOfCookies: function Generatep() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustp * this.customRandomp[i];
            return this.amount[i];
        }
    },


    disply: function () { return [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`] },
    totaloutpu: function sumout() {
        for (let a = 0; a < hours.lenght; a++) {
            let sum = 0;
            sum += this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
    infoArray: function(){return [`The location name ${this.name}, minimum coustomer per hour is ${this.min}, maximum coustomer per hour is ${this.max},Ther average for visitores is  ${this.avgCustp}`]},
}
console.log(paris);
////////////////////////////////////
const lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avgCustl: 4.6,
    customRandoml: function (min, max) {
        {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
    amountOfCookies: function Generatel() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustl * this.customRandoml[i];
            return this.amount[i];
        }
    },
    disply: function () { return [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`] },

    totaloutpu: function sumout() {
        for (let a = 0; a < hours.lenght; a++) {
            let sum = 0;
            sum += this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
    infoArray: function(){return [`The location name ${this.name}, minimum coustomer per hour is ${this.min}, maximum coustomer per hour is ${this.max},Ther average for visitores is  ${this.avgCustl}`]},
}
console.log(lima);
console.log(lima.infoArray());