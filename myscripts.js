
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';


var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg", style= 'width:400px; height:300px');


//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';


$(document).ready(function() {
    $("body").append("<div id='hover-box' style='background-color: none; position:absolute; width:100px; height:100px; border: 2px solid #169BD5; border-radius: 10px 0px 0px 10px;'></div>");

    $("body").append("<div id='translation-box' style='position:absolute; width:200px;'></div>");

    $("body").append("<div id='emotion-box' style='z-index: 1000000000; width:200px; height:100px'></div>");

    $(document).on("click", ".userContent", function () {
        var position = $(this).offset();
        var width = $(this).width();
        console.log(position);

        $("#hover-box").css("left", position.left + "px");
        $("#hover-box").css("top", position.top + "px");
        $("#hover-box").css("width", width + "px");
        $("#hover-box").css("height", $(this).height() + "px");

        $("#translation-box").css("left", (position.left + width) + "px");
        $("#translation-box").css("top", position.top + "px");
        $("#translation-box").css("z-index:10000000");


        // var svg = document.createElement('SVG');

        // document.body.appendChild(svg);




        console.log($(this).html());
        var content = $(this).find("p").text();
        console.log(content);
        var url1 = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";
        $.get(url1 + content, function (data) {
            console.log(data);
            $("#translation-box").html(data.data.translations[0].translatedText);

            var translation = data.data.translations[0].translatedText;

            var url2 = "https://still-lowlands-64290.herokuapp.com/pjsabc";

            $.post(url2, {text: translation}, function (data) {
                $("#emotion-box").html(JSON.stringify(data.docEmotions));



                var emotionData = [data.docEmotions.anger *400, data.docEmotions.sadness *400, data.docEmotions.joy *400, data.docEmotions.fear *400,data.docEmotions.disgust*400];
                console.log(emotionData);
                var barWidth = 35;
                var barOffset = 5;


                var myChart = d3.select('#translation-box').append('svg')
                    .attr('id', "graph")
                    .attr('width', 200)
                    .attr('height', 300)
                    .style('background', '#ffffff')
                    .selectAll('rect')
                    .data(emotionData)
                    .enter().append('rect')
                    .style('fill', 'lightblue')
                    .attr('width',barWidth)
                    .attr('height', function(d){
                        return d;
                    })
                    .attr('x', function(d,i){
                        return i * (barWidth + barOffset
                            );
                    })
                    .attr('y', function(d){
                        return 300 - d;
                    });


                var img = document.createElement("img");
                img.setAttribute("id", "anger");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Anger.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);


                var img = document.createElement("img");
                img.setAttribute("id", "sadness");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Sadness.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);


                var img = document.createElement("img");
                img.setAttribute("id", "joy");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Joy.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);

                var img = document.createElement("img");
                img.setAttribute("id", "fear");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Fear.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);

                var img = document.createElement("img");
                img.setAttribute("id", "disgust");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Disgust.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);










            });
            // var img = new Image();
            // $("svg").append("img");
            // img.src = chrome.extension.getURL("images/Anger.png");





            var url3 = "https://scary-ghoul-77952.herokuapp.com/pjsabc";


            $.post(url3, {text: translation}, function(data){
                console.log(JSON.stringify(data.docSentiment));
                $("#emotion-box").html(JSON.stringify(data.docSentiment));

            });


        });
    });
});

// $(window).on('load', function(){
//     alert('hahaha');
//     var img1 = document.createElement("img1");
//     img1.src = chrome.extension.getURL("images/Anger.png");
//     //alert('ddd');
//     var src = document.getElementById("graph");
//     console.log(src);
//     src.appendChild(img1);
//
//
// });