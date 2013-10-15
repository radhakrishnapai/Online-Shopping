/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


 $(function() {
// TODO refactor into a widget and get rid of these plugin methods
$.fn.left = function( using ) {
return this.position({
my: "right middle",
at: "left+25 middle",
of: "#container",
collision: "none",
using: using
});
};
$.fn.right = function( using ) {
return this.position({
my: "left middle",
at: "right-25 middle",
of: "#container",
collision: "none",
using: using
});
};
$.fn.center = function( using ) {
return this.position({
my: "center middle",
at: "center middle",
of: "#container",
using: using
});
};
$( "img:eq(0)" ).left();
$( "img:eq(1)" ).center();
$( "img:eq(2)" ).right();
function animate( to ) {
$( this ).stop( true, false ).animate( to );
}
function next( event ) {
event.preventDefault();
$( "img:eq(2)" ).center( animate );
$( "img:eq(1)" ).left( animate );
$( "img:eq(0)" ).right().appendTo( "#container" );
}
function previous( event ) {
event.preventDefault();
$( "img:eq(0)" ).center( animate );
$( "img:eq(1)" ).right( animate );
$( "img:eq(2)" ).left().prependTo( "#container" );
}
$( "#previous" ).click( previous );
$( "#next" ).click( next );
$( "img" ).click(function( event ) {
$( "img" ).index( this ) === 0 ? previous( event ) : next( event );
});
$( window ).resize(function() {
$( "img:eq(0)" ).left( animate );
$( "img:eq(1)" ).center( animate );
$( "img:eq(2)" ).right( animate );
});
});