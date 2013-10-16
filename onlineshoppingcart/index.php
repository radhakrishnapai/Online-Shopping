<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<?php session_start();?>
<html>
    <head>
        
        <!--<link href="css/jquery-ui-1.10.3.custom.css" rel="stylesheet">-->
        <link rel="stylesheet" href="css/jquery-ui-1.10.3.custom.css">
<!--        <link href="css/jquery.ui-core.min.css" rel="stylesheet">
        <link href="css/jquery.ui.theme.min.css" rel="stylesheet">
        <link href="css/jquery.ui.button.min.css" rel="stylesheet">-->
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/Shopping.css" type="text/css"/>
       
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!--        <link type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/ui-darkness/jquery-ui.css" rel="stylesheet" />-->
       
</head>
    <body>       
        <div class="Fullpage">
            <div class="Search">
                <div id="searchpattern"></div>
                <input id="searchinput" type="text">
                <button id="searchbutton">SEARCH</button>
                <ul id="log">
                    <?php if(isset($_SESSION['username'])) {
                        
                    ?>
                    <li id="loginname"><?php
                    echo " "." Hello " . $_SESSION['username'] . " ! ";
                        ?></li>
                    <li id="signout">Sign Out</li>
                    <?php 
                    } else {
                        ?>
                    <li id="signup">Sign Up&nbsp;</li>
                    <li id="login">&nbsp;Login</li>
                    <?php }
                    ?>
                    
                </ul>
                <div></div>
                <div class="Menu">
                    <ul>
                        <li id="menuelectronics">Electronics&nbsp;<img src="images/down.png">&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;Men&nbsp;<img src="images/down.png">&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;Women&nbsp;<img src="images/down.png">&nbsp;&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;Baby & Kids&nbsp;<img src="images/down.png">&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;Books & Media&nbsp;<img src="images/down.png">&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;Home & Kitchen&nbsp;<img src="images/down.png">&nbsp&nbsp;</li>
                        <li>&nbsp;&nbsp;Sports&nbsp;<img src="images/down.png">&nbsp;&nbsp;</li>
                    </ul>
                   

                </div>
                    <div id="clickcart" class="Cart">
                        <img id="cart" src="images/cartempty.png">
                        &nbsp;&nbsp;CART
                    </div>
                <div id="electronics">
                    <div id="listelectronics" class="List">
                        <h3>Categories</h3>
                        <div class="field"><label id="clickmobiles">Mobiles</label></div>
                        <div class="field"><label id="clicktablets">Tablets</label></div>
                        <div class="field"><label id="clickcameras">Cameras</label></div>
                    </div>
                </div>
                <div id="logindiv" class="form-container">
                    <form id="loginform">
                        <h3>Login</h3>
                        <div class="field"><input type="text" name="email" title="Email" placeholder="Email Address"/></div>
                        <div class="field"><input type="password" name="password" title="Password" placeholder="Password"/></div>
                        <div class="field"><label id="loginfailed">Login failed! Enter correct email & password!</label></div>
                        <div class="submit"><button id="loginbutton" type="submit">Login</button></div>
                    </form>
                </div>
                <div id="registerdiv" class="form-container">
                    <form id="registerform">
                        <h3>Sign Up</h3>
                        <div class="field"><input type="text" name="username" title="Username" placeholder="User Name"/></div>
                        <div class="field"><input type="text" name="email" title="Email Address" placeholder="Email Address"/></div>
                        <div class="field"><input type="password" name="password" title="Password" id="password" placeholder="Password" /></div>
                        <div class="field"><input type="password" name="confirmpassword" title="Confirm Password" placeholder="Confirm Password" /></div>
                        <div class="field" id="registersuccess"><label >Registered successfully!</label></div>
                        <div class="field" id="registerfailure"><label >Registration failed!</label></div>
                        <div class="submit"><button id="registerbutton" type="submit">Submit</button></div>
                        </form>
                </div>
            </div>

            <div class="Body">
                <!--<button id="opener">open the dialog</button>-->
                <div id="dialog" title="Dialog Title"><label id="cartdisplay"></label></div>
                <div class="ImageContain">
                    <div id="imagebox" class="ImageBox">
                        <img id="special" src="images/lastminute.jpg">
                        <img id="i1" src="images/image1.jpg">
                        <img id="i2" src="images/image2.jpg">
                        <img id="i3" src="images/image3.jpg">

                    </div>
            
                    <div id="image1" class="ImageSelect">Rs.500 CASHBACK</div>
                    <div id="image2" class="ImageSelect">25% OFF FOOTWEAR</div>
                    <div id="image3" class="ImageSelect">5% OFF LAPTOPS</div>
                </div>
                
                
                <div class="Guarantee">

                    <ul>
                        
                        <li id="gauranteedescription">SHOP WITH CONFIDENCE</li>
                        <li><img id="satisfaction" src="images/satisfaction.png">&nbsp;100% BUYER PROTECTION</li>
                        <li><img id="cash" src="images/cash.png">&nbsp;CASH ON DELIVERY</li>
                        <li><img id="return" src="images/return.png">&nbsp;FREE & EASY RETURNS</li>
                        <li><img id="original" src="images/original.jpeg">&nbsp;100% ORIGINAL PRODUCTS</li>
                    </ul>
                <div class="display">
                        <img class="display" src="images/cameras.jpeg"/>
                        <img class="display" src="images/games.jpg"/>
                </div>
<!--                <marquee width="100px;" marquee-style="3" float="right">
                    Hello
                </marquee>-->
<marquee behavior="slide " direction="left" class="Marquee"">Your scrolling text goes here</marquee>

                </div>
                
                
                
                
                
                
                
                <div id="DisplayBox">
                    <div class="ImageList">
                        <div id="clothing" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="clothing1" class="Caption">CLOTHING
                                <img src="images/right.png"/>
                            </div>    
                        </div>
                        <div id="footwear" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="footwear1" class="Caption">FOOTWEAR
                                <img src="images/right.png">
                            </div>
                        </div>
                        <div id="watches" class="SubImage">
                            <div class="blackbox"></div>
                            <div id ="watches1" class="Caption">WATCHES
                                <img src="images/right.png">
                            </div>
                        </div>
                    </div>


                    <div class="ImageList">
                        <div id="mobiles" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="mobiles1" class="Caption">MOBILES
                                <img src="images/right.png"/>
                            </div>    
                        </div>
                        <div id="cameras" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="cameras1" class="Caption">CAMERAS
                                <img src="images/right.png">
                            </div>
                        </div>
                        <div id="kitchen" class="SubImage">
                            <div class="blackbox"></div>
                            <div id ="kitchen1" class="Caption">KITCHEN
                                <img src="images/right.png">
                            </div>
                        </div>
                    </div>

                    <div class="ImageList">
                        <div id="tablets" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="tablets1" class="Caption">TABLETS
                                <img src="images/right.png"/>
                            </div>    
                        </div>
                        <div id="living" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="living1" class="Caption">LIVING
                                <img src="images/right.png">
                            </div>
                        </div>
                        <div id="tvshows" class="SubImage">
                            <div class="blackbox"></div>
                            <div id ="tvshows1" class="Caption">TV SHOWS
                                <img src="images/right.png">
                            </div>
                        </div>
                    </div>

                    <div class="ImageList">
                        <div id="laptops" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="laptops1" class="Caption">LAPTOPS
                                <img src="images/right.png"/>
                            </div>    
                        </div>
                        <div id="music" class="SubImage">
                            <div class="blackbox"></div>
                            <div id="music1" class="Caption">MUSIC
                                <img src="images/right.png">
                            </div>
                        </div>
                        <div id="games" class="SubImage">
                            <div class="blackbox"></div>
                            <div id ="games1" class="Caption">GAMES
                                <img src="images/right.png">
                            </div>
                        </div>
                    </div>
                </div>


                


                
            </div>
            
               <div class="Footer">
               <div class="FooterContent">
                   <div class="subfoot1">
                       <span style="font-size: 20px;">Keep In Touch</span><br><br>
                       <img src="images/fb.png"/>
                       <img src="images/twitter.png"/>
                       <img src="images/gmail.png"/>
                       <img src="images/youtube.png"/><br><br>
                       <b>On-Line Shopping</b><br>
                       <span style="color: #546d7a;">
                           &copy 2013 | privacy policy<br>
                           All Rights Reserved
                       </span>
                   </div>
                <div class="subfoot2">
                    Help<br>
                    <ul>
                        <li>Payments</li>
                        <li>Saved Cards</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div class="subfoot2">
                    On-Line Shopping<br>
                    <ul>
                        <li>About Us</li>
                        <li>Carrers</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Slash N</li>
                        <li>First Class Flights</li>
                    </ul>
                </div>
                <div class="subfoot3">
                    <span style="font-size:20px;color:white;">Contact Us</span><br><br>
                    Customer Support</br>
                    <span id="teleno" style="font-size: 30px;color: #1179d8;font-weight: 400;"> 1-866-599-6674</span><br/>
                    office@onlineshopping.com
                </div>
               </div>
           </div>
        </div>
        <script src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery.cycle.all.js"></script>
        <script src="js/jquery-ui-1.10.3.custom.js"></script>
        <script src="js/jquery.validate.min.js"></script> 
        <script src="js/shopping.js"></script>
         <script>
            $( "#dialog" ).dialog({ autoOpen: false });
            $( "#clickcart" ).click(function() {
                $( "#dialog" ).dialog( "open" );
                $(function() {
                    $.post("php/loadcart.php",function(data){
//                        console.log(data);
                        $("#cartdisplay").html(data);
                        });
                    $( "#dialog" ).dialog({
                        modal: true,
                        buttons: {
                            Ok: function() {
                                $( this ).dialog( "close" );
                                       }
                                    }
                                    });
                                    });
            });
            

        </script>
    </body>
</html>
