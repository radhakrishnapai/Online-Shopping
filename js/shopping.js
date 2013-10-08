/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
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

    try {
        $("#form1").validate({
            rules: {
                username: "required",
                password: "required"
            },
            messages: {
                username: "specify username",
                password: "provide password"
            }
        });
    }
    catch (e) {
        alert(e);
    }
    
    try {
        $("#form2").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8
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
            }

        });

    }
    catch (e) {
        alert(e);
    }
    $('#special').show();
    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
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
        $("#clothing").html("Hello</br>how are you");
    });  
    $("#clothing").mouseleave(function(){
//        $("#clothing").html("");
        $("#clothing1").show();
    });
});
