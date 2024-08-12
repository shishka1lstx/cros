function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "benz.hokobyan@gmail.com",
        Password : "6BF1E8465496B60C408B6CBC020B9C8C99A4",
        To : 'benz.hokobyan@gmail.com',
        From : "benz.hokobyan@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}