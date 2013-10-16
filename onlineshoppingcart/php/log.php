
                    <?php session_start(); if(isset($_SESSION['username'])) {
                        
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