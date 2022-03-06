
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
$("#myNav").click(openNav);


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$(".closebtn").click(closeNav);


$(document).ready(function()
{
                  
    $("#acc div:last").css("display","block");
    $("#acc h3").click(function(){
        
        $(this).next().slideToggle(700);
        $("#acc div").not($(this).next()).slideUp(700);
        
    });
                                   
});


function countdown()
{
                 
    // / Jan– Feb – Mar – Apr - May – Jun – Jul – Aug- Sep or Sept – Oct - Nov – Dec  
    let countDownDate = new Date("Jan 30, 2024 00:00:00").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	document.getElementById("days").innerHTML = `<h3 class="fw-light"> ${days} </br> Days </h3>`;
	document.getElementById("hours").innerHTML =`<h3> ${hours} </br> Hours </h3>`;
	document.getElementById("minutes").innerHTML = `<h3> ${minutes} </br> Minutes </h3>`;
	document.getElementById("seconds").innerHTML = `<h3> ${seconds} </br> Seconds </h3>`;

	setTimeout(countdown, 1000);
}

countdown();


        
$(function(){
    

    let max =100;
    
    $("textarea").keyup(function(){
        
        let length=$(this).val().length;
        let character = max - length;
        
        console.log(character)
        
        if(character<=0)
            {
                 $("#char").text("your available character finished");
                 $('#sPa').css("display","none");
                 $("textarea").attr("readOnly" ,true);
            }
        else
        {
          $("#char").text(character);
        }
        
    });

    $(".mybtn2").click(()=>{
        
        $("textarea").val("");
        $("textarea").attr("readOnly" ,false);
        $("#char").text("100");
        $('#sPa').css("display","block");
    });
    
});



