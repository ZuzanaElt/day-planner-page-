
//displaying current date - copied from Asiri Manjitha in DD/MM/YYYY format
//https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time#:~:text=setHours(0%2C0%2C0,%2C0)%20should%20be%20enough.

function currentDate() {
    const timeNow = new Date();
    const date = ('0' + timeNow.getDate()).slice(-2);
    const month = ('0' + (timeNow.getMonth() + 1)).slice(-2);
    const year = timeNow.getFullYear();
    return `${date}/${month}/${year}`
};

//assigning function value to the <p> element
$("#currentDay").text(currentDate());

//current time - copied from Satpal
//https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
function currentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      currentTime()
    }, 500);
  }
currentTime();
 

////////////////////////time block//////////////////////////////////////////////

//deleting left border
var firstColumn = $('.time-block');
firstColumn.css('border','1px solid black');
firstColumn.css('borderLeft','1px solid white');

//setting up data in local storage
var btnAllEl = $(".saveBtn");

$(btnAllEl).on('click', function(){
    localStorage.setItem ("keyone", $("#input1pm").val()); 
    localStorage.setItem ("keytwo", $("#input2pm").val());
    localStorage.setItem ("keythree", $("#input3pm").val());
    localStorage.setItem ("keyfour", $("#input4pm").val());
    localStorage.setItem ("keyfive", $("#input5pm").val());
    localStorage.setItem ("keynine", $("#input9am").val());
    localStorage.setItem ("keyten", $("#input10am").val());
    localStorage.setItem ("keyeleven", $("#input11am").val());
    localStorage.setItem ("keytwelve", $("#input12pm").val());
});

//fetching data from local storage
$("#input1pm").val(localStorage.getItem("keyone"));
$("#input2pm").val(localStorage.getItem("keytwo"));
$("#input3pm").val(localStorage.getItem("keythree"));
$("#input4pm").val(localStorage.getItem("keyfour"));
$("#input5pm").val(localStorage.getItem("keyfive"));
$("#input9am").val(localStorage.getItem("keynine"));
$("#input10am").val(localStorage.getItem("keyten"));
$("#input11am").val(localStorage.getItem("keyeleven"));
$("#input12pm").val(localStorage.getItem("keytwelve"));


//setting up 'now' time for conditional statement
const date = new Date();
let hours = date.getHours();

//for first row
if (hours > 9) {
    $("tbody").children().eq(0).children().eq(1).removeClass ("future");
    $("tbody").children().eq(0).children().eq(1).addClass ("past");
} else if (hours === 9 ) {
    $("tbody").children().eq(0).children().eq(1).removeClass ("future");
    $("tbody").children().eq(0).children().eq(1).removeClass ("past");
    $("tbody").children().eq(0).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(0).children().eq(1).addClass ("future");
    $("tbody").children().eq(0).children().eq(1).removeClass ("past");
}
//second row
if (hours > 10){
    $("tbody").children().eq(1).children().eq(1).removeClass ("future");
    $("tbody").children().eq(1).children().eq(1).addClass ("past");
    
} else if (hours === 10  ){
    $("tbody").children().eq(1).children().eq(1).removeClass ("future");
    $("tbody").children().eq(1).children().eq(1).removeClass ("past");
    $("tbody").children().eq(1).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(1).children().eq(1).addClass ("future");
    $("tbody").children().eq(1).children().eq(1).removeClass ("past");
}

//third row
if (hours > 11){
    $("tbody").children().eq(2).children().eq(1).removeClass ("future");
    $("tbody").children().eq(2).children().eq(1).addClass ("past");
    
} else if (hours === 11 ){
    $("tbody").children().eq(2).children().eq(1).removeClass ("future");
    $("tbody").children().eq(2).children().eq(1).removeClass ("past");
    $("tbody").children().eq(2).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(2).children().eq(1).addClass ("future");
    $("tbody").children().eq(2).children().eq(1).removeClass ("past");
}

//4th row
if (hours > 12){
    $("tbody").children().eq(3).children().eq(1).removeClass ("future");
    $("tbody").children().eq(3).children().eq(1).addClass ("past");
    
} else if (hours === 12 ){
    $("tbody").children().eq(3).children().eq(1).removeClass ("future");
    $("tbody").children().eq(3).children().eq(1).removeClass ("past");
    $("tbody").children().eq(3).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(3).children().eq(1).addClass ("future");
    $("tbody").children().eq(3).children().eq(1).removeClass ("past");
}

//for 5th row
if (hours > 13){
    $("tbody").children().eq(4).children().eq(1).removeClass ("future");
    $("tbody").children().eq(4).children().eq(1).addClass ("past");
    
} else if (hours === 13 ){
    $("tbody").children().eq(4).children().eq(1).removeClass ("future");
    $("tbody").children().eq(4).children().eq(1).removeClass ("past");
    $("tbody").children().eq(4).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(4).children().eq(1).addClass ("future");
    $("tbody").children().eq(4).children().eq(1).removeClass ("past");
}
//6th row
if (hours > 14){
    $("tbody").children().eq(5).children().eq(1).removeClass ("future");
    $("tbody").children().eq(5).children().eq(1).addClass ("past");
    
} else if (hours === 14 ){
    $("tbody").children().eq(5).children().eq(1).removeClass ("future");
    $("tbody").children().eq(5).children().eq(1).removeClass ("past");
    $("tbody").children().eq(5).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(5).children().eq(1).addClass ("future");
    $("tbody").children().eq(5).children().eq(1).removeClass ("past");
}

// 7th row
if (hours > 15){
    $("tbody").children().eq(6).children().eq(1).removeClass ("future");
    $("tbody").children().eq(6).children().eq(1).addClass ("past");
    
} else if (hours === 15 ){
    $("tbody").children().eq(6).children().eq(1).removeClass ("future");
    $("tbody").children().eq(6).children().eq(1).removeClass ("past");
    $("tbody").children().eq(6).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(6).children().eq(1).addClass ("future");
    $("tbody").children().eq(6).children().eq(1).removeClass ("past");
}

//8th row
if (hours > 16){
    $("tbody").children().eq(7).children().eq(1).removeClass ("future");
    $("tbody").children().eq(7).children().eq(1).addClass ("past");
    
} else if (hours === 16 ){
    $("tbody").children().eq(7).children().eq(1).removeClass ("future");
    $("tbody").children().eq(7).children().eq(1).removeClass ("past");
    $("tbody").children().eq(7).children().eq(1).addClass ("present");
} else {
    $("tbody").children().eq(7).children().eq(1).addClass ("future");
    $("tbody").children().eq(7).children().eq(1).removeClass ("past");
}

