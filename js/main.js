  $(document).ready(function(){
    $(".theme-cta").click(function(){
       $("html").toggleClass("light-theme");
    });

    $(".menu_toggle").click(function(){
       $("body").toggleClass("menuactive");
    });
    
    var typed = new Typed('.letters', {
        strings: ["Digital Assets", "Utility Assets", "In-game Assets"],
        typeSpeed: 60,
        backDelay: 600,
        loopCount: true,
        loop: true,
        smartBackspace: false 
    });
    

});
$(document).ready(function(){
    
    
   $("#JoinWaitlistButton").click(function(){
          $("#Modal").show();
       });
        $(".closeImage").click(function(){
          $("#Modal").hide();
       });
        $(".CloseBtn").click(function(){
          $("#ThankYouModal").hide();
       });


});
$(document).ready(function(){
    
    
  document.getElementById("subscribe-handler").onclick = function() {

     var email   = document.getElementsByClassName("InputEmail")[0].value;
     var elem    = document.getElementById("response");
     var message = elem.querySelector("div"); 
    
     
    
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    
       if(email == '' || !regex.test( String(email).toLowerCase() ) ) {
           message.innerHTML="Please enter a valid email";
    
           return;
    
       }
    
        var formData = new FormData();
        formData.append('api_key','AghazFUFk4uDrDUsquEg');
        formData.append('email', email);
        formData.append('list','FxuTs610GmfraAm67dxSQQ');

        axios.post('https://sendy.asvalabs.com/subscribe',formData, {headers:{'Content-type': 'application/x-www-form-urlencoded'}})
        .then(response => {
           const resData = response.data;
           if(resData){
          $("#Modal").hide();

          $("#ThankYouModal").show();
           }
           
        })
        .catch(error => {
        });
      }
document.getElementById("subscribe-handle").onclick = function() {
     var email   = document.getElementsByClassName("subscribeEmail")[0].value;
     var elem    = document.getElementById("respnse");
    
     var message = elem.querySelector("div");
    
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    
       if(email == '' || !regex.test( String(email).toLowerCase() ) ) {
    
           message.innerHTML="Please enter a valid email";
    
           return;
    
       }
    
        var formData = new FormData();
        formData.append('api_key','AghazFUFk4uDrDUsquEg');
        formData.append('email', email);
        formData.append('list','FxuTs610GmfraAm67dxSQQ');

        axios.post('https://sendy.asvalabs.com/subscribe',formData, {headers:{'Content-type': 'application/x-www-form-urlencoded'}})
        .then(response => {
           const resData = response.data;
           if(resData.includes(`You're already subscribed!`)){
               message.innerHTML = `You're already subscribed!`;
               document.getElementsByClassName("subscribeEmail")[0].value = '';
           }
           if(resData.includes(`You're subscribed!`)){
               message.innerHTML = `You're subscribed!`;
               document.getElementsByClassName("subscribeEmail")[0].value = '';
           }
        })
        .catch(error => {
           message.innerHTML = `Something went wrong!`;
        });
      }

});
