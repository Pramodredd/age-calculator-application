function calculateAge() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var today = new Date();
    var birthdate = new Date(year, month - 1, day);
    
    var ageInMilliseconds = today - birthdate;
    var ageDate = new Date(ageInMilliseconds);
    var ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    var ageMonths = ageDate.getUTCMonth();
    var ageDays = ageDate.getUTCDate() - 1;
    
    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
  }
  
  function validate() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var today = new Date();
    var selectedDate = new Date(year, month - 1, day);
    var y1 = today.getFullYear();
    
    var a = document.querySelectorAll('.invalid');
    var b = document.querySelectorAll('.first');
    var c = document.querySelectorAll('input');
    var d = document.getElementsByClassName('wrong')[0];
    var e = document.querySelectorAll('.empty');
    
    clearInputField();
    
    if (day > 31 || month > 12 || year > y1 || selectedDate > today) {
      a.forEach(function(element) {
        element.style.display = 'block';
      });
      b.forEach(function(element) {
        element.style.color = 'hsl(0, 100%, 67%)';
      });
      c.forEach(function(element) {
        element.style.borderColor = 'hsl(0, 100%, 67%)';
      });
    } else if (day > 30 && (month === '02' || month === '04' || month === '06' || month === '09' || month === '2' || month === '4' || month === '6' || month === '9' || month === '11')) {
      d.style.display = 'block';
      b.forEach(function(element) {
        element.style.color = 'hsl(0, 100%, 67%)';
      });
      c.forEach(function(element) {
        element.style.borderColor = 'hsl(0, 100%, 67%)';
      });
    } else if (day === '' || month === '' || year === '') {
      e.forEach(function(element) {
        element.style.display = 'block';
      });
      b.forEach(function(element) {
        element.style.color = 'hsl(0, 100%, 67%)';
      });
      c.forEach(function(element) {
        element.style.borderColor = 'hsl(0, 100%, 67%)';
      });
    } else {
      calculateAge();
    }
  }
  
  function clearInputField() {
    var a = document.querySelectorAll('.invalid');
    var b = document.querySelectorAll('.first');
    var c = document.querySelectorAll('input');
    var d = document.getElementsByClassName('wrong')[0];
    var e = document.querySelectorAll('.empty');
    
    a.forEach(function(element) {
      element.style.display = 'none';
    });
    b.forEach(function(element) {
      element.style.color = 'hsl(0, 0%, 86%)';
    });
    c.forEach(function(element) {
      element.style.borderColor = 'hsl(0, 1%, 44%)';
    });
    if (d) {
      d.style.display = 'none';
    }
    e.forEach(function(element) {
      element.style.display = 'none';
    });
  }
  