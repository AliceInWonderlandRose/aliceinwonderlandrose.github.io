$(document).ready(function(){
    console.log( 'jQuery started.' );
    
    // start and configure the blindify plugin
    $('#gallery').blindify({
        color : '#FE7F6C',
        numberOfBlinds : 40,
        slideVisibleTime : 5000
    });
    
});