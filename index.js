$( ".articleContent a" ).click(function() {
    //$( this ).slideUp();
    $("#popUp").removeClass("hidden");
    $('#popUp.loader .container').css('display','block');
});
$( ".closePopUp" ).click(function() {
    //$( this ).slideUp();
    $("#popUp").addClass("hidden");
    $('#popUp.loader .container').css('display','none');
});

let $xhr = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    var li_elements = document.getElementsByTagName('h3');

    for (i = 0; i < li_elements.length; i++) {
    li_elements[i].textContent = data.articles[i].title;
    }

    $("h6").text("UK Sports News");
});
$("nav li a:contains(UK)").click(function(event) {
let $xhr = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    var li_elements = document.getElementsByTagName('h3');

    for (i = 0; i < li_elements.length; i++) {
    li_elements[i].textContent = data.articles[i].title;
    }

});
});

$("nav li a:contains(US)").click(function(event) {
    event.preventDefault();

    let $xhrTwo = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhrTwo.done(function(data) {
    if ($xhrTwo.status !== 200) {
        return;
    }
    console.log(data);
    var hThree_elements = document.getElementsByTagName('h3');

    for (i = 0; i < hThree_elements.length; i++) {
    hThree_elements[i].textContent = data.articles[i].title;
    }

    $("h6").text("USA Sports News");
});

});