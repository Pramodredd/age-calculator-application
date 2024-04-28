function calculateAge() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var today = new Date();
    var birthdate = new Date(year, month - 1, day); // Note: month is zero-based in JavaScript Date object
  
    var ageYears = today.getFullYear() - birthdate.getFullYear();
    var ageMonths = today.getMonth() - birthdate.getMonth();
    var ageDays = today.getDate() - birthdate.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths = 12 - Math.abs(ageMonths);
      ageDays = daysInMonth(birthdate.getMonth(), birthdate.getFullYear()) - Math.abs(ageDays);
    } else {
      ageMonths = Math.abs(ageMonths);
      ageDays = Math.abs(ageDays);
    }
  
    var yearsElement = document.getElementById('years');
    yearsElement.textContent = ageYears;
  
    var monthsElement = document.getElementById('months');
    monthsElement.textContent = ageMonths;
  
    var daysElement = document.getElementById('days');
    daysElement.textContent = ageDays;
  }
  
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }


function validate(){
    var d=document.getElementById('day').value;
    var m=document.getElementById('month').value;
    var y=document.getElementById('year').value;
    var today = new Date();
    var selectedDate = new Date(y, m - 1, d);
    var y1=today.getFullYear();
    if(d >31 && m >12 && y>y1){
        var a=document.querySelectorAll('.invalid');
            a.forEach(function(element) {
            element.style.display = 'block';
            });
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 100%, 67%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
            });
    }else if(m >12 ){
        var a=document.querySelectorAll('.invalid');
            a.forEach(function(element) {
            element.style.display = 'block';
            });
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 100%, 67%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
            });
    }else if(d > 31 && (m === '01' || m === '03' || m === '05' || m === '07' || m === '08' || m === '10' || m === '12' || m === '1' || m === '3' || m === '5' || m === '7' ||m === '8')){
        var a=document.getElementsByClassName('invalid')[0];
        a.style.display = 'block';
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 100%, 67%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
            });
    }
    else if(d==='' || m==='' || y===''){
        var a=document.querySelectorAll('.empty');
        a.forEach(function(element) {
            element.style.display = 'block';
          });
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 100%, 67%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
            });
    }
    else if(d > 30 && (m === '02' || m === '04' || m === '06' || m === '09' || m === '2' || m === '4' || m === '6' || m === '9' || m === '11')){
        var a=document.getElementsByClassName('wrong')[0];
        a.style.display = 'block';
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 100%, 67%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
            });
    }
    else if(selectedDate>today){
        var a=document.querySelectorAll('.invalid');
            a.forEach(function(element) {
            element.style.display = 'block';
          });
        var b=document.querySelectorAll('.first');
          b.forEach(function(element) {
          element.style.color = 'hsl(0, 100%, 67%)';
          });
        var c=document.querySelectorAll('input');
          c.forEach(function(element) {
          element.style.borderColor = 'hsl(0, 100%, 67%)';
          });
    }
    else{
        calculateAge();
    }
}
function clearInputField(){
    var a=document.querySelectorAll('.invalid');
            a.forEach(function(element) {
            element.style.display = 'none';
            });
        var b=document.querySelectorAll('.first');
            b.forEach(function(element) {
            element.style.color = 'hsl(0, 1%, 44%)';
            });
        var c=document.querySelectorAll('input');
            c.forEach(function(element) {
            element.style.borderColor = 'hsl(0, 0%, 86%)';
            });
        var d=document.getElementsByClassName('wrong')[0];
            d.style.display = 'none';
        var e=document.querySelectorAll('.empty');
            e.forEach(function(element) {
                element.style.display = 'none';
              });    
        var f=document.querySelectorAll('.date');
            f.forEach(function(element) {
                element.textContent='--';
            });  
}