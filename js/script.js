
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    
    // Street variable receives value from form
    var $street = $('#street').val();
    
    // cityState receives value from form
    var $cityState = $('#city').val()

    var encodedStreet = encodeURIComponent($street.trim())
    
    var encodedCityState = encodeURIComponent($cityState.trim())
    
    // setup greeting header
    $greeting.text("So, you want to live at " + $street + " " + $cityState + "?");
    
    // create the url needed to request the google streetview image.
    var streetViewURL = "https://maps.googleapis.com/maps/api/streetview?size=1920x1080&location=" + encodedStreet + encodedCityState;
    // append img element with class of bgimg and src of streetViewURL var
    $body.append('<img class="bgimg" src=>');
    $('.bgimg').attr("src", streetViewURL);

    return false;
};

$('#form-container').submit(loadData);


// https://maps.googleapis.com/maps/api/streetview?size=1920x1080&location=12615%20gardenia%20pass,%20san%20antonio%20tx
