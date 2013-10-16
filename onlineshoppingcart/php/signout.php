<?php
session_start();
unset($_SESSION['username']);
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
echo $_SESSION['username'];
?>
