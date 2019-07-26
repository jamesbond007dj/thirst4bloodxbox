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

  goodbye = 'WELCOME TO BLOOD BATH';

} else { 

  window.location = 'https://media.wired.com/photos/5bd262d4b1e96429a704ba17/master/w_942,c_limit/bloodyhand_top-1036615756.jpg';
}

document.write('<h4>' + goodbye + '</h4>')



