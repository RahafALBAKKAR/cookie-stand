'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const shop = document.getElementById('shop');
const img =document.getElementById('img');
const seattle = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total:0,
    getCookies: function () {
      
        for (let i = 0; i < hours.length; i++) {
            let randAvgCust=Math.ceil(randomNumber(this.maxCust, this.minCust)*this.avg);
        this.cookiesSales.push(randAvgCust);
        this.total += randAvgCust;
    }
    return this.cookiesSales;
    },
    render: function(){
const h2Element = document.createElement('h2');
h2Element.textContent= this.name;
shop.appendChild(h2Element);
const ulElement=document.createElement('ul');
shop.appendChild(ulElement);
for (let i=0; i<hours.length;i++){
    const liElement=document.createElement('li');
    liElement.textContent=`${hours[i]} : ${this.cookiesSales[i]} cookies`;
    ulElement.appendChild(liElement);

}
const totalLi=document.createElement('li');
totalLi.textContent=`Total : ${this.total} cookies`;
ulElement.appendChild(totalLi);
},   
}
const tokyo = {
    name: 'Tokyo',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total:0,
    getCookies: function () {
      
        for (let i = 0; i < hours.length; i++) {
            let randAvgCust=Math.ceil(randomNumber(this.maxCust, this.minCust)*this.avg);
        this.cookiesSales.push(randAvgCust);
        this.total += randAvgCust;
    }
    return this.cookiesSales;
    },
    render: function(){
const h2Element = document.createElement('h2');
h2Element.textContent= this.name;
shop.appendChild(h2Element);
const ulElement=document.createElement('ul');
shop.appendChild(ulElement);
for (let i=0; i<hours.length;i++){
    const liElement=document.createElement('li');
    liElement.textContent=`${hours[i]} : ${this.cookiesSales[i]} cookies`;
    ulElement.appendChild(liElement);

}
const totalLi=document.createElement('li');
totalLi.textContent=`Total : ${this.total} cookies`;
ulElement.appendChild(totalLi);
},   
}
const dubai = {
    name: 'Dubai',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total:0,
    getCookies: function () {
      
        for (let i = 0; i < hours.length; i++) {
            let randAvgCust=Math.ceil(randomNumber(this.maxCust, this.minCust)*this.avg);
        this.cookiesSales.push(randAvgCust);
        this.total += randAvgCust;
    }
    return this.cookiesSales;
    },
    render: function(){
const h2Element = document.createElement('h2');
h2Element.textContent= this.name;
shop.appendChild(h2Element);
const ulElement=document.createElement('ul');
shop.appendChild(ulElement);
for (let i=0; i<hours.length;i++){
    const liElement=document.createElement('li');
    liElement.textContent=`${hours[i]} : ${this.cookiesSales[i]} cookies`;
    ulElement.appendChild(liElement);

}
const totalLi=document.createElement('li');
totalLi.textContent=`Total : ${this.total} cookies`;
ulElement.appendChild(totalLi);
},   
}
const laim = {
    name: 'Laim',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total:0,
    getCookies: function () {
      
        for (let i = 0; i < hours.length; i++) {
            let randAvgCust=Math.ceil(randomNumber(this.maxCust, this.minCust)*this.avg);
        this.cookiesSales.push(randAvgCust);
        this.total += randAvgCust;
    }
    return this.cookiesSales;
    },
    render: function(){
const h2Element = document.createElement('h2');
h2Element.textContent= this.name;
shop.appendChild(h2Element);
const ulElement=document.createElement('ul');
shop.appendChild(ulElement);
for (let i=0; i<hours.length;i++){
    const liElement=document.createElement('li');
    liElement.textContent=`${hours[i]} : ${this.cookiesSales[i]} cookies`;
    ulElement.appendChild(liElement);

}
const totalLi=document.createElement('li');
totalLi.textContent=`Total : ${this.total} cookies`;
ulElement.appendChild(totalLi);
},   
}
const paris = {
    name: 'Paris',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total:0,
    getCookies: function () {
      
        for (let i = 0; i < hours.length; i++) {
            let randAvgCust=Math.ceil(randomNumber(this.maxCust, this.minCust)*this.avg);
        this.cookiesSales.push(randAvgCust);
        this.total += randAvgCust;
    }
    return this.cookiesSales;
    },
    render: function(){
const h2Element = document.createElement('h2');
h2Element.textContent= this.name;
shop.appendChild(h2Element);
const ulElement=document.createElement('ul');
shop.appendChild(ulElement);
for (let i=0; i<hours.length;i++){
    const liElement=document.createElement('li');
    liElement.textContent=`${hours[i]} : ${this.cookiesSales[i]} cookies`;
    ulElement.appendChild(liElement);

}
const totalLi=document.createElement('li');
totalLi.textContent=`Total : ${this.total} cookies`;
ulElement.appendChild(totalLi);
},   
}
seattle.getCookies();
seattle.render();
tokyo.getCookies();
tokyo.render();
dubai.getCookies();
dubai.render();
laim.getCookies();
laim.render();
paris.getCookies();
paris.render();



function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let imgElement=document.createElement('img');
imgElement.scr=this.img; 
