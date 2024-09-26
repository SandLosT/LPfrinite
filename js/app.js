$(document).ready(function () {
  $(".on").click(function () {
    $(".alert").css({
      transform: "translateX(0)",
    });
  });

  
  $(".btn").click(function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        email : document.getElementById("message").value,
    }
    emailjs.send("service_zqv83bs","template_tswx73t",parms).then(alert("Email enviado!!"))
  })

  $(".close").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });

  $(".out").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });
});

$(document).ready(function () {
  $(".on").click(function () {
    $(".alert").css({
      transform: "translateX(0)",
    });
  });
  window.sr = ScrollReveal({ reset: true});

  sr.reveal('.img-fechamento', 
    {
      rotate:{ x:-10, y:90, z:0},
      duration: 2000
    });


  $(".close").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });

  $(".out").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });
});

ScrollReveal({ reset: true });
ScrollReveal().reveal(".banner", { easing: "ease-in", delay: 100 });
ScrollReveal().reveal(".news", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".events", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".jobs", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".register", { easing: "ease-in", delay: 200 });
