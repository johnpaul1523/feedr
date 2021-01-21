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
    var img_elements = $('.featuredImage img');

    for (i = 0; i < li_elements.length; i++) {
        li_elements[i].textContent = data.articles[i].title;
        img_elements[i].src = data.articles[i].urlToImage;
    }
    var numberOfArticles = data.articles;
    console.log(numberOfArticles);

    numberOfArticles.forEach(function(item){
        item["impressions"] = 0;
        var impression_elements = $('.impressions')
        $(impression_elements).text(data.articles[i].impressions);
    });

    $('h3').click(function(){
        var impressionText = $(this).next('.impressions');
        let $impressionIndex = $('h3').index(this);
        console.log($impressionIndex);
        return data.articles[$impressionIndex].impressions++;
        var impressionValues = data.articles[$impressionIndex].impressions;
        $(impressionText).text(impressionValues);
    });

    $( ".closePopUp" ).click(function() {
        var impressionList = $('.impressions');
        console.log(impressionList);
        for (j = 0; j < impressionList.length; j++ ) {
            impressionList[j].textContent = data.articles[j].impressions;
        }
    });
    
    $("h6").text("UK Sports News");


    $('h3').click(function(){

    
        let $hThree = $('h3').index(this); 
        console.log($hThree);

        if ($xhr.status !== 200) {
            return;
        }
        console.log(data);
        var hOne_elements = $('#popUp h1');
        var popUp_paragraphs = $('#popUp p');
        var headerText = data.articles[$hThree].title;
        var descriptionText = data.articles[$hThree].description;
        $(hOne_elements).text(headerText); 
        $(popUp_paragraphs).text(descriptionText);
        $('#popUp .container a').attr('href',data.articles[$hThree].url);     
    });
    
});


$("nav li a:contains(UK)").click(function(event) {
let $xhr = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    var li_elements = document.getElementsByTagName('h3');
    var img_elements = $('.featuredImage img');

    for (i = 0; i < li_elements.length; i++) {
        li_elements[i].textContent = data.articles[i].title;
        img_elements[i].src = data.articles[i].urlToImage;
    }

    var numberOfArticles = data.articles;
    console.log(numberOfArticles);

    numberOfArticles.forEach(function(item){
        item["impressions"] = 0;
        var impression_elements = $('.impressions')
        $(impression_elements).text(data.articles[i].impressions);
    });

    $('h3').click(function(){
        var impressionText = $(this).next('.impressions');
        let $impressionIndex = $('h3').index(this);
        console.log($impressionIndex);
        return data.articles[$impressionIndex].impressions++;
        var impressionValues = data.articles[$impressionIndex].impressions;
        $(impressionText).text(impressionValues);
    });

    $( ".closePopUp" ).click(function() {
        var impressionList = $('.impressions');
        console.log(impressionList);
        for (j = 0; j < impressionList.length; j++ ) {
            impressionList[j].textContent = data.articles[j].impressions;
        }
    });
    
    $("h6").text("UK Sports News");

    $('h3').click(function(){

    
        let $hThree = $('h3').index(this); 
        console.log($hThree);

        if ($xhr.status !== 200) {
            return;
        }
        console.log(data);
        var hOne_elements = $('#popUp h1');
        var popUp_paragraphs = $('#popUp p');
        var headerText = data.articles[$hThree].title;
        var descriptionText = data.articles[$hThree].description;
        $(hOne_elements).text(headerText); 
        $(popUp_paragraphs).text(descriptionText);
        $('#popUp .container a').attr('href',data.articles[$hThree].url);     
    });
});
});

$("nav li a:contains(US)").click(function(event) {
    event.preventDefault();

    let $xhr = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    var hThree_elements = document.getElementsByTagName('h3');
    var img_elements = $('.featuredImage img');

    for (i = 0; i < hThree_elements.length; i++) {
    hThree_elements[i].textContent = data.articles[i].title;
    img_elements[i].src = data.articles[i].urlToImage;
    }

    var numberOfArticles = data.articles;
    console.log(numberOfArticles);

    numberOfArticles.forEach(function(item){
        item["impressions"] = 0;
        var impression_elements = $('.impressions')
        $(impression_elements).text(data.articles[i].impressions);
    });

    $('h3').click(function(){
        var impressionText = $(this).next('.impressions');
        let $impressionIndex = $('h3').index(this);
        console.log($impressionIndex);
        return data.articles[$impressionIndex].impressions++;
        var impressionValues = data.articles[$impressionIndex].impressions;
        $(impressionText).text(impressionValues);
    });

    $( ".closePopUp" ).click(function() {
        var impressionList = $('.impressions');
        console.log(impressionList);
        for (j = 0; j < impressionList.length; j++ ) {
            impressionList[j].textContent = data.articles[j].impressions;
        }
    });

    $("h6").text("USA Sports News");

    $('h3').click(function(){

    
        let $hThree = $('h3').index(this); 
        console.log($hThree);

        if ($xhr.status !== 200) {
            return;
        }
        console.log(data);
        var hOne_elements = $('#popUp h1');
        var popUp_paragraphs = $('#popUp p');
        var headerText = data.articles[$hThree].title;
        var descriptionText = data.articles[$hThree].description;
        $(hOne_elements).text(headerText); 
        $(popUp_paragraphs).text(descriptionText);
        $('#popUp .container a').attr('href',data.articles[$hThree].url);     
    });

});

});

$("nav li a:contains(reland)").click(function(event) {
    event.preventDefault();

    let $xhr = $.getJSON('https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=3cf172d6dbfd4c648fcde545ee9fa8a0');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    var hThree_elements = document.getElementsByTagName('h3');
    var img_elements = $('.featuredImage img');

    for (i = 0; i < hThree_elements.length; i++) {
    hThree_elements[i].textContent = data.articles[i].title;
    img_elements[i].src = data.articles[i].urlToImage;
    }
    
    var numberOfArticles = data.articles;
    console.log(numberOfArticles);

    numberOfArticles.forEach(function(item){
        item["impressions"] = 0;
        var impression_elements = $('.impressions')
        $(impression_elements).text(data.articles[i].impressions);
    });

    $('h3').click(function(){
        var impressionText = $(this).next('.impressions');
        let $impressionIndex = $('h3').index(this);
        console.log($impressionIndex);
        return data.articles[$impressionIndex].impressions++;
        var impressionValues = data.articles[$impressionIndex].impressions;
        $(impressionText).text(impressionValues);
    });

    $( ".closePopUp" ).click(function() {
        var impressionList = $('.impressions');
        console.log(impressionList);
        for (j = 0; j < impressionList.length; j++ ) {
            impressionList[j].textContent = data.articles[j].impressions;
        }
    });
    
    $("h6").text("Ireland Sports News");

    $('h3').click(function(){

    
        let $hThree = $('h3').index(this); 
        console.log($hThree);

        if ($xhr.status !== 200) {
            return;
        }
        console.log(data);
        var hOne_elements = $('#popUp h1');
        var popUp_paragraphs = $('#popUp p');
        var headerText = data.articles[$hThree].title;
        var descriptionText = data.articles[$hThree].description;
        $(hOne_elements).text(headerText); 
        $(popUp_paragraphs).text(descriptionText);
        $('#popUp .container a').attr('href',data.articles[$hThree].url);     
    });

});

});
