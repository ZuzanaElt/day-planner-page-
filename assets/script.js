
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


function colorChange(hoursNow, indexA){
    if (hours > hoursNow) {
        $("tbody").children().eq(indexA).children().eq(1).removeClass ("future");
        $("tbody").children().eq(indexA).children().eq(1).addClass ("past");
    } else if (hours === hoursNow ) {
        $("tbody").children().eq(indexA).children().eq(1).removeClass ("future");
        $("tbody").children().eq(indexA).children().eq(1).removeClass ("past");
        $("tbody").children().eq(indexA).children().eq(1).addClass ("present");
    } else {
        $("tbody").children().eq(indexA).children().eq(1).addClass ("future");
        $("tbody").children().eq(indexA).children().eq(1).removeClass ("past");
    }
};
colorChange(9,0);
colorChange(10,1);
colorChange(11,2);
colorChange(12,3);
colorChange(13,4);
colorChange(14,5);
colorChange(15,6);
colorChange(16,7);