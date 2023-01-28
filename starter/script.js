//displaying current date - copied from Asiri Manjitha
//https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time#:~:text=setHours(0%2C0%2C0,%2C0)%20should%20be%20enough.

function getCurrentDate() {
    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`
};

//assigning function value to the <p> element
$("#currentDay").text(getCurrentDate());

 var firstColumn = $('.time-block');
 firstColumn.css('borderLeft','1px solid white');

// let btn5pm = $('#btn5pm')
// console.log(btn5pm)

// btn5pm.on('click', function(){
//     localStorage.setItem('value',value.input)
//     console.log(btn5pm)


// })

var input5pmVar = $("#input5pm").val();

var btn5pm = $("#btn5pm");

//button to input data into table from form
btn5pm.on('click', function(){
    localStorage.setItem ("input5pm", $("#input5pm").val()); 
  
});

var input2 = localStorage.getItem("input5pm");

console.log(input5pmVar)
console.log(input2)
input5pmVar.textContent = input2
console.log(input5pmVar.textContent)


{/* <textarea style="width:200px; height: 60px;" id="area" placeholder="Write here"></textarea>
<br>
<button onclick="localStorage.removeItem('area');area.value=''">Clear</button>
<script>
    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };
</script> */}
