'use strict';
hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
    name: 'seattle',
    /*Stores the min/max hourly 
    customers, and the average 
    cookies per customer, in object 
    properties
*/
    minCusts: 23,
    maxCusts: 65,
    avgCusts: 6.3,
    /*Uses a method of that object to 
    generate a random number of customers
     per hour. Objects/Math/random*/
    customRandom: function coustomerRandomly(minCusts,maxCusts) {
        {
            minCusts = Math.ceil(minCusts);
            maxCusts = Math.floor(maxCusts);
            return Math.floor(Math.random() * (maxCusts - minCusts) + minCusts);
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
    infoArray: [`The location name ${this.name}, minimum coustomer per hour is${this.minCusts},
    maximum coustomer per hour is ${this.maxCusts},Ther average for visitores is  ${this.avgCusts}`],
    /*Display the values of each array as unordered lists in the browser*/
disply : [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`],
/*Calculating the sum of these hourly totals; your 
output for each location should look like this:*/
totaloutpu : function sumout(){
    for (let a=0; a<hours.lenght ;a++){
        let sum=0;
        sum+=this.amountOfCookies;
    }
    //Total: 875 cookies
    return [`Total: ${this.sum} cookies`];
},

}
////////////////////////////////////
let tokyo = {
    name: 'Tokyo',
    minCustt: 3,
    maxCustt: 24,
    avgCustt: 1.2,
    customRandomt: function coustomerRandomlyt(minCustt, maxCustt) {
        {
            minCustt = Math.ceil(minCustt);
            maxCustt = Math.floor(maxCustt);
            return Math.floor(Math.random() * (maxCustt - minCustt) + minCustt);
        }
    },
    amountOfCookies: function Generatet() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustt * this.customRandomt[i];
            return this.amount[i];
        }
    },
    infoArray: [`The location name ${this.name}, minimum coustomer per hour is${this.minCustt},
    maximum coustomer per hour is ${this.maxCustt},Ther average for visitores is  ${this.avgCustt}`],
    disply : [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`],
}
/////////////////////////////////////////
let dubai = {
    name:'Dubai',
    minCustd: 11,
    maxCustd: 38,
    avgCustd: 3.7,
    customRandomd: function coustomerRandomlyd(minCustd, maxCustd) {
        {
            minCustd = Math.ceil(minCustd);
            maxCustd = Math.floor(maxCustd);
            return Math.floor(Math.random() * (maxCustd - minCustd) + minCustd);
        }
    },
    amountOfCookies: function generated() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustd * this.customRandomd[i];
            return this.amount[i];
        }
    },
    infoArray: [`The location name ${this.name}, minimum coustomer per hour is${this.minCustd},
    maximum coustomer per hour is ${this.maxCustd},Ther average for visitores is  ${this.avgCustd}`],
    disply : [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`],

    totaloutpu : function sumout(){
        for (let a=0; a<hours.lenght ;a++){
            let sum=0;
            sum+=this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
}
///////////////////////////////////////
let paris = {
    name:'Paris',
    minCustp: 20,
    maxCustp: 38,
    avgCustp: 2.3,
    customRandomp: function coustomerRandomlyp(minCustt, maxCustt) {
        {
            minCustp = Math.ceil(minCustp);
            this.maxCustp = Math.floor(maxCustp);
            return Math.floor(Math.random() * (this.maxCustp - minCustp) + minCustp);
        }
    },
    amountOfCookies: function Generatep() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustp * this.customRandomp[i];
            return this.amount[i];
        }
    },
   

    disply : [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`],
    totaloutpu : function sumout(){
        for (let a=0; a<hours.lenght ;a++){
            let sum=0;
            sum+=this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
    infoArray: [`The location name ${this.name}, minimum coustomer per hour is${this.minCustp},
    maximum coustomer per hour is ${this.maxCustp},Ther average for visitores is  ${this.avgCustp}`],
}
////////////////////////////////////
let lima = {
    name:'Lima',
    minCustl: 2,
    maxCustl: 16,
    avgCustl: 4.6,
    customRandoml: function coustomerRandomlyl(minCustl, maxCustl) {
        {
            minCustl = Math.ceil(minCustl);
            maxCustl = Math.floor(maxCustl);
            return Math.floor(Math.random() * (maxCustl - minCustl) + minCustl);
        }
    },
    amountOfCookies: function Generatel() {
        for (let i = 0; i < hours.lenght; i++) {
            amount[i] = this.avgCustl * this.customRandoml[i];
            return this.amount[i];
        }
    },
    disply : [`${hours[i]} : ${this.amountOfCookiesamountOfCookies} cookies`],

    totaloutpu : function sumout(){
        for (let a=0; a<hours.lenght ;a++){
            let sum=0;
            sum+=this.amountOfCookies;
        }
        //Total: 875 cookies
        return [`Total: ${this.sum} cookies`];
    },
    infoArray: [`The location name ${this.name}, minimum coustomer per hour is${this.minCustl},
    maximum coustomer per hour is ${this.maxCustl},Ther average for visitores is  ${this.avgCustl}`],
}
