/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$("#buynokialumia1020").click(function() {
    $("#buynokialumia1020").hide();  
    $("#buynokialumia1020").toggle("shake");    
    $.post("php/addtocart.php",{name: "Nokia Lumia 1020"},function(data){
        if(data!=="") {
            console.log(data);
        }
        else {
            alert("Please login to purchase!");
        }
    }
    );
});
$("#nokiaLumia1020").click(function() {
    $(".ImageContain").toggle("clip");
    $("#DisplayBox").toggle("clip");
    $("#DisplayBox").slideDown();
    $("#DisplayBox").load("php/demo.php");
});


$("#buysamsunggalaxy3").click(function() {
    $("#buysamsunggalaxy3").hide();  
    $("#buysamsunggalaxy3").toggle("shake");    
    $.post("php/addtocart.php",{name: "Samsung Galaxy 3"},function(data){
        if(data !== "success")
            console.log(data);
    });
});
$("#samsunggalaxy3").click(function() {
    $(".ImageContain").toggle("clip");
    $("#DisplayBox").toggle("clip");
    $("#DisplayBox").slideDown();
    $("#DisplayBox").load("php/samsunggalaxy3.php");
});