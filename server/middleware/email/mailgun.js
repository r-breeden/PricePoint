const path = require('path');
let fs = require('fs');
let config = require('config');
let api_key = config.get('Mailgun.key');
let DOMAIN = config.get('Mailgun.domain');
let mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

//verify the user's email address
let confirmationEmail = (username, userEmailAddress) => {

};

// priceReducedNotification expects the following object
// var infoObj = {
//   username: ,
//   userProfileURL: ,
//   userEmail: ,
//   productName: ,
//   productURL:
// };
let priceReducedNotification = (info) => {
  //grab html template for price reduction email
  fs.readFile('./priceReducedEmailTemplate.html', 'utf-8', (err, htmlTemplate) => {
    if (err) { throw err; }

    //insert user data into email template
    htmlTemplate = htmlTemplate.replace('INSERT_USERNAME', info.username);
    htmlTemplate = htmlTemplate.replace('INSERT_PRODUCT_NAME', info.productName);
    htmlTemplate = htmlTemplate.replace('INSERT_PRODUCT_URL', info.productURL);
    htmlTemplate = htmlTemplate.replace('INSERT_USER_PROFILE_URL', info.userProfileURL);
    console.log(htmlTemplate);

    //construction mailgun data obj
    let data = {
      from: 'Price Point <postmaster@sandbox72d67ff5bb6b4581aaab66a3aea35ef0.mailgun.org>',
      to: `${info.userEmail}`,
      subject: `Recent price reduction: ${info.productName}`,
      html: htmlTemplate
    };

    // //send the email
    mailgun.messages().send(data, function (error, response) {
      if ( error ) {
        console.log( 'mailgun error: email failure. ');
        console.log( error );
      }
      console.log('email response: ', response);
    });
  });
};
