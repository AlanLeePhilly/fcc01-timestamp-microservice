// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  // define variables that reference elements on our page
  const output = document.getElementById('output');
  const unixForm = document.getElementById('unix-form');
  const unixInput = unixForm.elements['unix-timestamp'];
  
  const dateForm = document.getElementById('date-form');
  const dateInput = dateForm.elements['date'];
  
  unixForm.onsubmit = function(event) {
    event.preventDefault();    
    output.innerHTML = `You supplied unix timecode ${unixInput.value}. \n The calendar date is ${toNatDate(unixInput.value)}`;
  };
  
   dateForm.onsubmit = function(event) {
      event.preventDefault();
      output.innerHTML = `You supplied the date ${toNatDate(toUnix(dateInput.value))}. \n The unix timestamp is ${toUnix(dateInput.value)}`;
    };
  
  function toUnix(date){
    return Date.parse(date)/1000
  }

  function toNatDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var year = a.getUTCFullYear();
    var month = months[a.getUTCMonth()];
    var date = a.getUTCDate();
    var hour = a.getUTCHours();
    var min = a.getUTCMinutes();
    var sec = a.getUTCSeconds();
    var time = month + ' ' + date + ', ' + year;
    return time;
  }  
  
})()