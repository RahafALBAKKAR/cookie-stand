let Profiles = document.getElementById('shop');
let articleElement = document.createElement('article');
Profiles.appendChild(articleElement);

let tableelement = document.createElement('table');
articleElement.appendChild(tableelement);

let hours = ['    ', '6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ' ,'Daily location Total '];
let column = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let row_1 = document.createElement('tr');
tableelement.appendChild(row_1);
for (let i = 0; i < hours.length; i++) {
  let th_1 = document.createElement('th');
  th_1.textContent = hours[i];
  row_1.appendChild(th_1);
}
function LocationShop(name, min, max, avg) {
  this.location = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesSales = 0;
  this.random = 0;
}


/////////////////////////////////////
LocationShop.prototype.getCookies = function(){
  this.cookiesSales = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
  this.cookiesSales = Math.floor(this.cookiesSales * this.avg);
  this.total = this.total + this.cookiesSales;
  return this.cookiesSales;
};

LocationShop.prototype.amount = function () {
  let row_2 = document.createElement('tr');
  tableelement.appendChild(row_2);
  let th_1 = document.createElement('td');
  th_1.textContent = this.location;
  row_2.appendChild(th_1);
  for (let i = 1; i <hours.length-1; i++) {
    this.random = this.getCookies()
    column[i] += this.random
    let tdElement = document.createElement('td');
    tdElement.textContent = this.random;
    row_2.appendChild(tdElement);
  }
  column[hours.length - 1] += this.total
  let tdElement = document.createElement('td');
  tdElement.textContent = this.total ;
  row_2.appendChild(tdElement);
};
function  footer () {
  let row_2 = document.createElement('tr');
  tableelement.appendChild(row_2);
  let th_1 = document.createElement('td');
  th_1.textContent = 'Totals';
  row_2.appendChild(th_1);
  for (let i = 1; i < hours.length ; i++) {
    let td_1 = document.createElement('td');
    td_1.textContent = column[i] ;
    row_2.appendChild(td_1);
  }
}
let seattle = new LocationShop('seattle', 23, 65, 6.3);
let tokyo = new LocationShop('tokyo', 3, 24, 1.2);
let Dubai = new LocationShop ('Dubai', 11, 38, 3.7);
let Paris = new LocationShop ('Paris', 20, 38, 2.3);
let lima = new LocationShop ('lima', 2, 16, 4.6);

seattle.amount();
tokyo.amount();
Dubai.amount();
Paris.amount();
lima.amount();
footer();

   let addForm=document.getElementById(addForm)
   tableelement.appendChild(addForm);
   
addForm.addEventListener('Submit',addNewItem())
function addNewItem(event){
    event.preventDefult();
let nameNew =event.target.nameNew.value;
let minNew =event.target.minNew.value;
let maxNew =event.target.maxNew.value;
let avgNew =event.target.avgNew.value;
let newItem = new LocationShop(nameNew,minNew,maxNew,avgNew);
newItem.amount();
footer();
}
 for(let i=0 ; i<hours.length;i++){
  footer();
 let row = table.insertRow(-1);

 }

