$(document).ready(function(){

    $('.button-collapse').sideNav({
      menuWidth: 300
    });

    var url = 'http://quote-api.cfapps.io/quotes';
    $.get(url,function(data) {
        var rand = data[Math.floor(Math.random() * data.length)];
        var quote = data[rand];
        $('#author').text(quote.author);
        $('#message').text(quote.content);
    });

    //$('.scrollspy').scrollSpy();

}); // end of document ready
