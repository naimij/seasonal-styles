$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);


        season = season.toLowerCase();

        switch(season){

            case "spring":
                $("#logo").attr("src","images/spring.gif");
               

               // #2B7129

               $("html").css("background-color","#2B7129");

            
            break;

            default:
                alert("You didn't hit a case!");


        }
    });
});