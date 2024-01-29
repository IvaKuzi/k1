function sendHttpRequest() {
  var url = 'https://hook.eu2.make.com/chryykerh0xj2slgfyq6nrrga8475a83';

  alert("Http request sent to " + url);

  fetch(url);
}

function sendEmail(email = 'fn1.kiberone@gmail.com') {
  var url = "https://script.google.com/macros/s/AKfycbwGfZ8-55P934Qj8nR7LNh354ZByqRI19_DO5H71Mqa_b-ytQ262sqvtkfwdobFxEf-/exec";
  //var email = "bassclef@mail.ru"

  alert("Email sent from your gmail account to " + email);

  fetch(url + "?q=" + JSON.stringify([
    email,
    "Subject",
    `Message`
  ])).then(() => {
    // here you can let the user know their contact was received
  });
}
