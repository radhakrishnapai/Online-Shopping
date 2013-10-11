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
    $("#electronics").hide();
//    $("#DisplayBox").hide();
    var mouse_is_inside_login = false;
    var mouse_is_inside_register = false;


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
            $(this).html("Hello</br>how are you");
        });
    });
    $("#footwear").mouseleave(function(){
        $("#footwear1").show();
        $("#footwear .blackbox").hide();
    });
    
    $("#watches").mouseover(function(){
        $("#watches1").hide();
        $("#watches .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#watches").mouseleave(function(){
        $("#watches1").show();
        $("#watches .blackbox").hide();
    });
    
    $("#mobiles").mouseover(function(){
        $("#mobiles1").hide();
        $("#mobiles .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#mobiles").mouseleave(function(){
        $("#mobiles1").show();
        $("#mobiles .blackbox").hide();
    });
    
    $("#cameras").mouseover(function(){
        $("#cameras1").hide();
        $("#cameras .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#cameras").mouseleave(function(){
        $("#cameras1").show();
        $("#cameras .blackbox").hide();
    });
    
    $("#kitchen").mouseover(function(){
        $("#kitchen1").hide();
        $("#kitchen .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#kitchen").mouseleave(function(){
        $("#kitchen1").show();
        $("#kitchen .blackbox").hide();
    });
    
    $("#tablets").mouseover(function(){
        $("#tablets1").hide();
        $("#tablets .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#tablets").mouseleave(function(){
        $("#tablets1").show();
        $("#tablets .blackbox").hide();
    });
    
    $("#living").mouseover(function(){
        $("#living1").hide();
        $("#living .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#living").mouseleave(function(){
        $("#living1").show();
        $("#living .blackbox").hide();
    });
    
    $("#tvshows").mouseover(function(){
        $("#tvshows1").hide();
        $("#tvshows .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#tvshows").mouseleave(function(){
        $("#tvshows1").show();
        $("#tvshows .blackbox").hide();
    });
    
    $("#laptops").mouseover(function(){
        $("#laptops1").hide();
        $("#laptops .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#laptops").mouseleave(function(){
        $("#laptops1").show();
        $("#laptops .blackbox").hide();
    });
    
    $("#music").mouseover(function(){
        $("#music1").hide();
        $("#music .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#music").mouseleave(function(){
        $("#music1").show();
        $("#music .blackbox").hide();
    });
    
    $("#games").mouseover(function(){
        $("#gamess1").hide();
        $("#games .blackbox").show(500,function(){
            $(this).html("Hello</br>how are you");
        });
    });
    $("#games").mouseleave(function(){
        $("#games1").show();
        $("#games .blackbox").hide();
    });

// jquery for menu select

    $("#menuelectronics").mouseover(function() {
        $("#electronics").slideDown();
    });
    
    $("#electronics").mouseleave(function() {
        $("#electronics").delay(100).slideUp();
    });
    $("#clickmobiles").click(function() {
       $("#DisplayBox").load("html/demo_test.txt");
       alert("hello");
    });


    $('.display').cycle({
            fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
    
  //  $( ".selector" ).dialog({ buttons: [ { text: "Ok", click: function() { $( this ).dialog( "close" ); } } ] });


});
