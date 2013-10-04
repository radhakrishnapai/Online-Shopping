/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    /*$("#image1").mouseover(function(){
        $("#imagebox").css({
            "background-image": 'url("images/image1.jpg")'
        });
    });
    $("#image2").mouseover(function(){
        $("#imagebox").css({
            "background-image": 'url("images/image2.jpg")'
        });
    });
    $("#image3").mouseover(function(){
        $("#imagebox").css({
            "background-image": 'url("images/image3.jpg")'
        });
    });*/
    /*$("#image1").mouseover(function(){
        $("#i1").show('slow');
    });
    $("#image1").mouseleave()(function(){
        $("#i1").hide('slow');
    });*/
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
});
