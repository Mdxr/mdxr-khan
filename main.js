const hamIcon = document.getElementById("ham-icon");
const hamMenu = document.getElementById("ham-menu");

hamIcon.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
});



function send() {
  let userName = document.getElementById("user-name").value;
  let userEmail = document.getElementById("user-email").value;
  let userMessage = document.getElementById("user-message").value;
  let body =
    "<h1>" + userName + "</h1> <br/> " + userEmail + " <br/>" + userMessage;

  if (userName === '' || userEmail === '' || userMessage === '') {
    return 
  }
  else{
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "decodersixnine@gmail.com",
      Password: "C90A46637637A1D7EE39E1A768B7FD3EF000",
      To: "decodersixnine@gmail.com",
      From: "decodersixnine@gmail.com",
      Subject: "Message from Portfolio",
      Body: body,
    }).then(
      message => {
        if(message == 'OK'){
          swal("","Your Message has been sent", "success");
        } else{
          swal("","Something went wrong", "error");
        }
      });
    
  }
   
}
