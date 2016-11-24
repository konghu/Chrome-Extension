
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
                var emotionData = [data.docEmotions.anger *400, data.docEmotions.sadness *400, data.docEmotions.joy *400, data.docEmotions.fear *400,data.docEmotions.disgust*400];
                var barWidth = 35;
                var barOffset = 5;

                $("#translation-box").append("<p id='label2'>Emotion</p>");

                var choices = ['#E40B15', '#0B76E4', '#ECEB3B', '#D61DD3', '#1DD649'];
                function colors(i){
                    return choices[i];
                }

                var dataset = ["Anger", "Sadness", "Joy", "Fear", "Disgust"]
                var myChart = d3.select('#translation-box').append('svg')
                    .attr('id', "graph")
                    .attr('width', 200)
                    .attr('height', 300)
                    .style('background', '#a2a9b5')
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
                        return 300 - d;
                    });




                var img = document.createElement("img");
                img.setAttribute("id", "anger");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Anger2.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);


                var img = document.createElement("img");
                img.setAttribute("id", "sadness");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Sadness2.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);


                var img = document.createElement("img");
                img.setAttribute("id", "joy");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Joy2.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);

                var img = document.createElement("img");
                img.setAttribute("id", "fear");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Fear2.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);

                var img = document.createElement("img");
                img.setAttribute("id", "disgust");
                img.setAttribute("class", "labels");
                img.src = chrome.extension.getURL("images/Disgust2.png");
                var src = document.getElementById("translation-box");
                src.appendChild(img);

            });



            var url3 = "https://scary-ghoul-77952.herokuapp.com/pjsabc";


            $.post(url3, {text: translation}, function(data){
                $("#emotion-box").html(JSON.stringify(data.docSentiment));
                console.log(JSON.stringify(data.docSentiment));

                var sentimentData = data.docSentiment;
                var chartData = [sentimentData.score];
                console.log(chartData);
//                alert(typeof chartData);

                //             Set the frame
                var margin = {top: 30, right: 10, bottom: 10, left: 10},
                    width = 200 - margin.left - margin.right,
                    height = 100 - margin.top - margin.bottom;

//             function for x axis
                var xBar = d3.scaleLinear()
                    .domain([-1, 1])
                    .range([0, width])
                    .nice();

//              function for y axis
                var yBar = d3.scaleBand()
                    .domain([0, 1])
                    .range([0, 36], 0);

//              frame for the bar chart
                var svgBar = d3.select("#translation-box").append("svg")
                    .attr("id", "barchart")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate (" + margin.left + "," + margin.top + ")");

//              building the bar chart
                svgBar.selectAll(".bar")
                    .data(chartData)
                    .enter().append("rect")
                    .attr("class", function(dBar) {return dBar < 0 ? "bar negative" : "bar positive";})
                    .attr("x", function(dBar) {return xBar(Math.min(0, dBar));})
                    .attr("y", function(dBar, iBar) {return yBar(iBar);})
                    .attr("width", function(dBar) {return Math.abs(xBar(dBar) - xBar(0));})
                    .attr("height", yBar.bandwidth());

//              building the x axis
                svgBar.append("g")
                    .attr("class", "x axis")
                    .call(d3.axisTop(xBar));

                $("#barchart").append("#graph");

            });


        });
    });
});
