<?php
session_start();
?>
        <link rel="stylesheet" href="css/elevatezoom.css"/>
        <div class="zoom-wrapper">
            <div class="HeadingCaption">Nokia Lumia 1020</div> 
            <div class="zoom-left">
                <div class="zoomWrapper" style="height:274px;width:411px;">
                    <img class="active" id="zoom_03" width="411" data-zoom-image="images/large/image2.jpg" src="images/small/image2.png" style="border: 1px solid rgb(232, 232, 230); position: absolute;">
                </div>
                <div id="gallery_01" style="width: 500px; float:left">
                    <a class="elevatezoom-gallery" data-zoom-image="images/large/image1.jpg" data-image="images/small/image1.png" data-update="" href="#">
                        <img width="100" src="images/small/image1.png">
                    </a>
                    <a class="elevatezoom-gallery active" data-zoom-image="images/large/image2.jpg" data-image="images/small/image2.png" href="#">
                        <img width="100" src="images/small/image2.png">
                    </a>
                    <a class="elevatezoom-gallery" data-zoom-image="images/large/image3.jpg" data-image="images/small/image3.png" href="#">
                        <img width="100" src="images/small/image3.png">
                    </a>
                    <a class="elevatezoom-gallery" data-zoom-image="images/large/image4.jpg" data-image="images/small/image4.png" href="#">
                        <img width="100" src="images/small/image4.png">
                    </a>
                </div>
            </div>
            </div>
<button id="buynokialumia1020" class="CartButton">ADD TO CART</button>
</div>
        </div>
        <script src='js/jquery-1.8.3.min.js'></script>
        <script src='js/jquery.elevatezoom.js'></script>
        <script>
            $("#zoom_03").elevateZoom({gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true});

            $("#zoom_03").bind("click", function(e) {
                var ez = $('#zoom_03').data('elevateZoom');
                $.fancybox(ez.getGalleryList());
                return false;
            });
        </script>
        <script src="js/purchase.js" type="text/javascript"></script>