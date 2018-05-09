const emitter = require('./modules/sendEmails');

emitter.on('emailEvent', (message)=> {
//event name: emailEmail
    console.log(`Email: ${message}`) //event name: Email

});

emitter.emit('emailEvent', 'Send activation email to user after registration');