/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#loginform').hide();
    $('#registerform').hide();
    $('#special').show();
    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
    $("#registerfailure").hide();
    $("#registersuccess").hide();
    $("#loginfailed").hide();
    $(".blackbox").hide();
    $("#loginform")[0].reset();
    $("#registerform")[0].reset();
    $("#listelectronics").hide();
//    $("#DisplayBox").hide();
    var mouse_is_inside_login = false;
    var mouse_is_inside_register = false;
    var highest_index = 0;
    


//    $("#loginform").mouseleave(function() {
//        mouse_is_inside_login = false;
//    });
//    
//    $("#registerform").mouseleave(function() {
//        mouse_is_inside_register = false;
//    });
//
//
//    $("html").mouseup(function() {
//        if (mouse_is_inside_login === false) {
//            $("#loginform").slideUp();
//            mouse_is_inside_login = true;
//        }
//        if (mouse_is_inside_register === false) {
//            $("#registerform").slideUp();
//           mouse_is_inside_register = true;
//        }
//    });

//    $(document).mouseup(function(e)
//    {
//        var container = $("#logindiv");
//        if (!container.is(e.target) && container.has(e.target).length === 0)
//        // if the target of the click isn't the container...
//                 // ... nor a descendant of the container
//        {
//            container.slideUp();
//        }
//    });
//    
//    $(document).mouseup(function(e)
//    {
//        var container = $("#registerdiv");
//        if (!container.is(e.target) && container.has(e.target).length === 0)
//                // if the target of the click isn't the container...
//                        // ... nor a descendant of the container
//                        {
//                            container.slideUp();
//                        }
//                        
//            });
//    $("#image1").mouseover(function(){
//        $("#imagebox").css({
//            "background-image": 'url("images/image1.jpg")'
//        });
//    });
//    $("#image2").mouseover(function(){
//        $("#imagebox").css({
//            "background-image": 'url("images/image2.jpg")'
//        });
//    });
//    $("#image3").mouseover(function(){
//        $("#imagebox").css({
//            "background-image": 'url("images/image3.jpg")'
//        });
//    });
//    $("#image1,#image2,#image3").mouseleave(function(){
//        $("#imagebox").css({
//            "background-image": 'url("images/image3.jpg")'
//        });
//    });

//    $("html").click(function() {
//       $("#registerform").slideUp(); 
//       $("#loginform").slideUp();
//    });

    $("#loginform").validate({
        rules: {
            email: "required",
            password: "required"
        },
        messages: {
            email: "specify email",
            password: "provide password"
        },
            submitHandler: function(){
                var formVal = $("#loginform").serialize();
                        $.post("php/login.php", formVal).done(function(data) {
                            if (data === "fail") {
                                $("#loginfailed").show();
                                $("#loginform").delay("2000").slideUp();
                            }
                            else {
                                $(this).hide();
                                $("#loginform").slideUp();
                                $("#loginform")[0].reset();
                                $("#log").hide();
                                alert(data);
                            }
                        });
            }
    });
    
    $("#registerform").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 2
            },
            confirmpassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "specify your name",
                minlength: jQuery.format("At least {0} characters required!")
            },
            email: {
                required: "enter your email address",
                email: "must be of the form name@domain.com"
            },
            password: {
                required: "enter your password which will be used for login",
                minlength: jQuery.format("At least {0} characters required!")
            },
            confirmpassword: {
                required: "re-enter same password",
                equalTo: "incorrect password"
            }
        },
        submitHandler: function() {



            var formVal = $("#registerform").serialize();
            $.post("php/register.php", formVal).done(function(data) {
                if (data) {
                    $("#registersuccess").show();
                    $("#registerform")[0].reset();
                    $("#registerfailure").hide();
                    $("#registerform").delay(2000).slideUp();
                }
                else {
                    $("#registersuccess").hide();
                    $("#registerfailure").show();
                    $("#registerform").delay(2000).slideUp();
                }
            });

        }
    });



    $("#login").mouseover(function(){
//        alert("hi");
        $("#registerform").fadeOut();
        $("#loginfailed").hide();
        $("#loginform").slideDown();
    });
//    $("#loginform input").click(function(){
////        alert("hi");
//        $("#registerform").fadeOut();
//        $("#loginfailed").hide();
//        $("#loginform").show();
//    });
    
    $("#signup").mouseover(function(){
        $("#registerform").val("");
        $("#loginform").fadeOut();
        $("#registerform").slideDown();
    });
    $("#loginform,#registerform").mouseleave(function(){
        $("#loginform").delay(1000).slideUp();
        $("#registerform").delay(1000).slideUp();
//        $("")
    });
  
    

    $("#image1").mouseover(function(){
       $("#i1").fadeIn();
       $("#i2").hide();
       $("#i3").hide();
       $('#special').hide();
    });
    $("#image2").mouseover(function(){
       $("#i1").hide();
       $("#i2").fadeIn();
       $("#i3").hide();
       $('#special').hide();
    });
    $("#image3").mouseover(function(){
       $("#i1").hide();
       $("#i2").hide();
       $("#i3").fadeIn();
       $('#special').hide();
    });
    $("#image1,#image2,#image3").mouseleave(function(){
       $("#i1").hide();
       $("#i2").hide();
       $("#i3").hide();
       $('#special').fadeIn();
    });
    
    $("#clothing").mouseover(function(){
        $("#clothing1").hide();
        $("#clothing .blackbox").show(500,function(){
            $(this).html(
                    "Men<br/>\n\
                     Women<br/>\n\
                     Baby & Kids<br/>"
        );
        });
    });
    $("#clothing").mouseleave(function(){
        $("#clothing .blackbox").stop();
        $("#clothing1").show();
        $("#clothing .blackbox").hide();
    });
    
     $("#footwear").mouseover(function(){
        $("#footwear1").hide();
        $("#footwear .blackbox").show(500,function(){
            $(this).html(
                    "Casual<br/>\n\
                     Sports<br/>\n\
                     Sandals<br/>\n\
                     Flip Flops<br/>\n\
                     Formal<br/>"
        );
        });
    });
    $("#footwear").mouseleave(function(){
        $("#footwear1").show();
        $("#footwear .blackbox").hide();
    });
    
    $("#watches").mouseover(function(){
        $("#watches1").hide();
        $("#watches .blackbox").show(500,function(){
            $(this).html(
                    "Fastrack<br/>\n\
                     Casio<br/>\n\
                     Titan<br/>\n\
                     Fossil<br/>\n\
                     Maxima<br/>"
        );
        });
    });
    $("#watches").mouseleave(function(){
        $("#watches1").show();
        $("#watches .blackbox").hide();
    });
    
    $("#mobiles").mouseover(function(){
        $("#mobiles1").hide();
        $("#mobiles .blackbox").show(500,function(){
            $(this).html(
                    "Samsung<br/>\n\
                     Nokia<br/>\n\
                     Micromax<br/>\n\
                     Sony<br/>"
        );
        });
    });
    $("#mobiles").mouseleave(function(){
        $("#mobiles1").show();
        $("#mobiles .blackbox").hide();
    });
    $("#mobiles").click(function(){
        $("#DisplayBox").hide();
        $("#DisplayBox").toggle("shake");
        $("#DisplayBox").load("html/demo_test.html");
        });
    
    $("#cameras").mouseover(function(){
        $("#cameras1").hide();
        $("#cameras .blackbox").show(500,function(){
            $(this).html(
                    "Canon<br/>\n\
                     Nikon<br/>\n\
                     Panasonic<br/>\n\
                     Sony<br/>"
        );
        });
    });
    $("#cameras").mouseleave(function(){
        $("#cameras1").show();
        $("#cameras .blackbox").hide();
    });
    
    $("#kitchen").mouseover(function(){
        $("#kitchen1").hide();
        $("#kitchen .blackbox").show(500,function(){
            $(this).html(
                    "Napkins<br/>\n\
                     Aprons<br/>\n\
                     Table Covers<br/>\n\
                     Linen Sets<br/>"
        );                 
        });
    });
    $("#kitchen").mouseleave(function(){
        $("#kitchen1").show();
        $("#kitchen .blackbox").hide();
    });
    
    $("#tablets").mouseover(function(){
        $("#tablets1").hide();
        $("#tablets .blackbox").show(500,function(){
            $(this).html(
                    "Ipad<br/>\n\
                     Nexus7<br/>"
        );  
        });
    });
    $("#tablets").mouseleave(function(){
        $("#tablets1").show();
        $("#tablets .blackbox").hide();
    });
    
    $("#living").mouseover(function(){
        $("#living1").hide();
        $("#living .blackbox").show(500,function(){
            $(this).html(
                    "Curtains<br/>\n\
                     Carpet Rugs<br/>\n\
                     Diwan Sets<br/>\n\
                     Cushions<br/>"
        );  
        });
    });
    $("#living").mouseleave(function(){
        $("#living1").show();
        $("#living .blackbox").hide();
    });
    
    $("#tvshows").mouseover(function(){
        $("#tvshows1").hide();
        $("#tvshows .blackbox").show(500,function(){
            $(this).html(
                    "Pre-Orders<br/>\n\
                     DVDs<br/>\n\
                     Blu-Rays<br/>\n\
                     New Releases<br/>"
        );  
        });
    });
    $("#tvshows").mouseleave(function(){
        $("#tvshows1").show();
        $("#tvshows .blackbox").hide();
    });
    
    $("#laptops").mouseover(function(){
        $("#laptops1").hide();
        $("#laptops .blackbox").show(500,function(){
            $(this).html(
                    "HP<br/>\n\
                     Dell<br/>\n\
                     Lenovo<br/>\n\
                     Asus<br/>"
        );  
        });
    });
    $("#laptops").mouseleave(function(){
        $("#laptops1").show();
        $("#laptops .blackbox").hide();
    });
    
    $("#music").mouseover(function(){
        $("#music1").hide();
        $("#music .blackbox").show(500,function(){
            $(this).html(
                    "Bollywood<br/>\n\
                     Vinyls<br/>\n\
                     Devotional<br/>\n\
                     Rock<br/>"
        ); 
        });
    });
    $("#music").mouseleave(function(){
        $("#music1").show();
        $("#music .blackbox").hide();
    });
    
    $("#games").mouseover(function(){
        $("#gamess1").hide();
        $("#games .blackbox").show(500,function(){
            $(this).html(
                    "Xbox<br/>\n\
                     PS3 Games<br/>\n\
                     PC Games<br/>\n\
                     Top Featured<br/>"
        ); 
        });
    });
    $("#games").mouseleave(function(){
        $("#games1").show();
        $("#games .blackbox").hide();
    });

// jquery for menu select

    $("#menuelectronics").mouseover(function() {
        $("#listelectronics").slideDown();
    });
    
    $("#electronics").mouseleave(function() {
        $("#listelectronics").delay(100).slideUp();
    });
    $("#clickmobiles").click(function() {
       $("#DisplayBox").load("html/demo_test.html");
    });

    $("#nokiaLumia1020").click(function(){
//        alert("hi");
        $(".ImageContain").toggle("clip");
        $("#DisplayBox").toggle("clip");
        $("#DisplayBox").slideDown();
        $("#DisplayBox").load("html/nokialumia1020.html"); 
//            $(this).html(
//                    "Fastrack<br/>\n\
//                     Casio<br/>\n\
//                     Titan<br/>\n\
//                     Fossil<br/>\n\
//                     Maxima<br/>"
//        );
    });


    $('.display').cycle({
            fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
    
//    $("#teleno").toggle( "pulsate" );
    
//    $( ".selector" ).dialog({ buttons: [ { text: "Ok", click: function() { $( this ).dialog( "close" ); } } ] });

//    $("[z-index]").each(function() {
//    if ($(this).attr("z-index") > highest_index) {
//         highest_index = $(this).attr("z-index");
//    }
//    });
//    $(".Search").attr("z-index", highest_index + 1);
//    
 
    
});
