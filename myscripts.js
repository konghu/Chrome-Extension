
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';


var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg", style= 'width:400px; height:300px');
var canvas = document.createElement('canvas');


//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );
btnForm.action = '';

//set attributes for btn
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';


$(document).ready(function() {
    $("body").append("<div id='hover-box' style='background-color: none; position:absolute; width:100px; height:100px; border: 2px solid #169BD5; border-radius: 10px 0px 0px 10px;'></div>");

    $("body").append("<div id='translation-box' style='position:absolute; width:200px;'></div>");

    $(document).on("click", ".userContent", function () {
        var position = $(this).offset();
        var width = $(this).width();

        $("#hover-box").css("left", position.left + "px");
        $("#hover-box").css("top", position.top + "px");
        $("#hover-box").css("width", width + "px");
        $("#hover-box").css("height", $(this).height() + "px");

        $("#translation-box").css("left", (position.left + width) + "px");
        $("#translation-box").css("top", position.top + "px");
        $("#translation-box").css("z-index:10000000");



        console.log($(this).html());
        var content = $(this).find("p").text();
        console.log(content);
        var url1 = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";
        $.get(url1 + content, function (data) {
            console.log(data);
            $("#translation-box").empty().append("<p id='label1'>Translation</p>");
            $("#translation-box").append("<p id='translations'></p>");
            $("#translations").html(data.data.translations[0].translatedText);

            var translation = data.data.translations[0].translatedText;

            var url2 = "https://still-lowlands-64290.herokuapp.com/pjsabc";

            $.post(url2, {text: translation}, function (data) {
                var emotionData = [data.docEmotions.anger *200, data.docEmotions.sadness *200, data.docEmotions.joy *200, data.docEmotions.fear *200,data.docEmotions.disgust*200];
                var barWidth = 35;
                var barOffset = 5;

                $("#translation-box").append("<p id='label2'>Emotion</p>");

                var choices = ['#E40B15', '#f4b042', '#ECEB3B', '#0B76E4', '#1DD649'];
                function colors(i){
                    return choices[i];
                }

                var dataset = ["Anger", "Sadness", "Joy", "Fear", "Disgust"]
                var myChart = d3.select('#translation-box').append('svg')
                    .attr('id', "graph")
                    .attr('width', 200)
                    .attr('height', 150)
                    .style('background', '#f5f5f5')
                    .selectAll('rect')
                    .data(emotionData)
                    .enter().append('rect')
                    .attr("fill",function(d,i){console.log(colors(i))
                        return colors(i)})
                    .attr('width',barWidth)
                    .attr('height', function(d){
                        return d;
                    })
                    .attr('x', function(d,i){
                        return i * (barWidth + barOffset
                            );
                    })
                    .attr('y', function(d){
                        return 150 - d;
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



            var url3 = "https://scary-ghoul-77952.herokuapp.com/pjsabc";


            $.post(url3, {text: translation}, function(data){
                $("#emotion-box").html(JSON.stringify(data.docSentiment));
                console.log(JSON.stringify(data.docSentiment));

                $("#translation-box").append("<p id='label3'>Feeling</p>");

                var sentimentData = data.docSentiment;
                var chartData = [sentimentData.score];
                var typeData = [sentimentData.type];

                var score = function() {
                    if (typeData != "neutral" && chartData != null) {
                        return chartData;
                    } else {
                        return ["0"];
                    }
                };
//                alert(score(sentimentData));

                $("#translation-box").append("<canvas id='foo' width='200'></canvas>");

                $("<p id='scale'>Negative Positive</p>").insertAfter("#foo");

                var opts = {
                    lines: 12,
                    angle: 0.15,
                    lineWidth: 0.44,
                    pointer: {
                        length: 0.7,
                        strokeWidth: 0.03,
                        color: '#000000'
                    },
                    limitMax: 'false',
                    percentColors: [[0.0, "#A52A2A" ], [1.0, "#4682b4"]], // !!!!
                    strokeColor: '#E0E0E0',
                    colorStart: '#A52A2A',
                    colorStop: '#4682b4',
                    generateGradient: true
                };

                var target = document.getElementById('foo');

                var gauge = new Gauge(target).setOptions(opts);

                gauge.minValue = -1;
                gauge.maxValue = 1;
                gauge.animationSpeed = 32;
                gauge.set(score(sentimentData));

                $("#foo").append("#graph");

            });


        });
    });
});
