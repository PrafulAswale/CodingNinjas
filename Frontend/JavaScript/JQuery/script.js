$('#para1').html('Welcome');
$( "h1" ).css( "fontSize", "100px" ); // Setting an individual property.
 
// Setting multiple properties.
$( "h1" ).css({
    fontSize: "100px",
    color: "red"
});

$('h1').click(function(){
    alert("You Clicked It!")
})

$("button").click( function() {
    $("input:text").val("HeHeHe");
});