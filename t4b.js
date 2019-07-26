var howMany = function() {
  var count = prompt ('LEGAL WARNING!THIS SITE IS RESTIRICTED UNDER AGE OF 18 PERSONAL!!!.PLEASE ENTER YOUR BIRTH YEAR BELOW:');

  while ( isNaN(count) ) {
    count = prompt('PLEASE ENTER A YEAR - 4 DIGIT NUMBER');

  }
  return Number(count);

};

var today = new Date();
var date1 = today.getFullYear();
var date2 = howMany();
var date3 = date1 - date2;
var goodbye;

if ( date3 > 18) {
  goodbye = 'LEGAL WARNING!!!IF YOU ARE UNDER 18 PLEASE CLICK BELOW BUTTON';

} else {
  confirm('ARE YOU 18 OR OLDER? LEGAL WARNING!!!"PLEASE CONFRIM');
  goodbye = 'LEGAL WARNING!!!IF YOU ARE UNDER 18 PLEASE CLICK BELOW BUTTON';
}


document.write('<h4>' + goodbye + '</h4>');


