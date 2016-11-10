// // var content=document.getElementsByClassName("userContent");  // Find the elements
// // var x = $(".userContent").find("p").first().html();
// // var x = document.getElementsByClassName("userContent").getElementsByTagName("p");
//
// var x = document.getElementsByTagName("p");
//
//
// $(document).ready(function(){
//
//     for(var i = 0; i < x.length; i++){
//
//         $("<button class='icon' id='iconid"+i+"'>check</button>").insertAfter(x[i]);
//
//     }
//
//     $(".icon").click(function(){
//
//         // create boxes and append text to boxes
//         order = parseInt(this.id.charAt(6));
//         $("<div class='box' id='boxid"+order+"'>"+x[order].innerText+"</div>").insertAfter('#'+this.id+'');
//     });
//
//
//         $(document).on("click", ".icon", function(){
//             var url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";
//
//             var order = parseInt(this.id.charAt(6));
//
//             var content = x[order].innerText;
//             $("#boxid"+order+"").append("<div id='translation-box"+order+"' style='background-color: lightblue; position:absolute; width:200px; height:100px'; </div>");
//
//             $("<div class='emotionbox' id='emotionboxid"+order+"'></div>").insertAfter('#'+this.id+'');
//             $("<div class='sentimentbox' id='sentimentboxid"+order+"'></div>").insertAfter('#'+this.id+'');
//
//             console.log(content);
//             $.get(url + content, function(data){
//                 console.log(data);
//                 var translation = data.data.translations[0].translatedText;
//                 $("#translation-box"+order+"").html(translation);
//
//
//
//                 var url2 = "https://still-lowlands-64290.herokuapp.com/pjsabc";
//
//                     $.post(url2, {text: translation}, function(data){
//                         console.log(JSON.stringify(data.docEmotions));
//                         $("#emotionboxid"+order+"").html(JSON.stringify(data.docEmotions));
//
//
//
//                         // $("#emotionboxid"+order+"").html(JSON.stringify(data.docEmotions));
//                     });
//
//
//                 var url3 = "https://scary-ghoul-77952.herokuapp.com/pjsabc";
//                     $.post(url3, {text: translation}, function(data){
//                         console.log(JSON.stringify(data.docSentiment));
//                         $("#sentimentboxid"+order+"").html(JSON.stringify(data.docSentiment));
//                     });
//             });
//     });
// });

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';


var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );
//set attributes for div
// div.id = 'myDivId';
// div.style.position = 'fixed';
// div.style.top = '50%';
// div.style.left = '50%';
// div.style.width = '100%';
// div.style.height = '100%';
// div.style.backgroundColor = 'red';

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';

$(document).ready(function() {
    $("body").append("<div id='hover-box' style='background-color: yellow; position:absolute; width:100px; height:100px'></div>");

    $("body").append("<div id='translation-box' style='background-color: lightblue; position:absolute; width:200px;'></div>");

    $("body").append("<div id='emotion-box' style='z-index: 1000000000;background-color: indianred; width:200px; height:100px ' ></div>");

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
        $("#translation-box").css("height", "500px");
        $("#translation-box").css("z-index:10000000");

        // var x =$("#translation-box").offset();
        // $("#emotion-box").css("left", (x.left + width) + "px");
        // $("#emotion-box").css("top", x.top + "px");
        // $("#emotion-box").css("height", $("#translation-box").height() + "px");
        // $("#emotion-box").css("z-index:10000000");

        $("#emotion-box").appendTo("#translation-box");


        console.log($(this).html());
        var content = $(this).find("p").first().html();
        console.log(content);
        var url1 = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";
        $.get(url1 + content, function (data) {
            console.log(data);
            $("#translation-box").html(data.data.translations[0].translatedText);

            var translation = data.data.translations[0].translatedText;

            var url2 = "https://still-lowlands-64290.herokuapp.com/pjsabc";

            $.post(url2, {text: translation}, function (data) {
                $("#emotion-box").html(JSON.stringify(data.docEmotions));
                console.log(data.docEmotions);
            });


            var url3 = "https://scary-ghoul-77952.herokuapp.com/pjsabc";


            $.post(url3, {text: translation}, function(data){
                console.log(JSON.stringify(data.docSentiment));
                $("#emotion-box").html(JSON.stringify(data.docSentiment));

            });


        });
    });
});