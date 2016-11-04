// var content=document.getElementsByClassName("userContent");  // Find the elements
// var x = $(".userContent").find("p").first().html();
// var x = document.getElementsByClassName("userContent").getElementsByTagName("p");

var x = document.getElementsByTagName("p");

$(document).ready(function(){

    for(var i = 0; i < x.length; i++){

        $("<button class='icon' id='iconid"+i+"'>check</button>").insertAfter(x[i]);

    }
});


$(document).ready(function(){

    $(".icon").click(function(){

        // create boxes and append text to boxes
        order = parseInt(this.id.charAt(6));
        $("<div class='box' id='boxid"+order+"'>"+x[order].innerText+"</div>").insertAfter('#'+this.id+'');
    });
});



        $(document).on("click", ".icon", function(){
            var url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";

            var order = parseInt(this.id.charAt(6));

            var content = x[order].innerText;
            $("#boxid"+order+"").append("<div id='translation-box"+order+"' style='background-color: lightblue; position:absolute; width:200px; height:100px'; </div>");

            $("<div class='emotionbox' id='emotionboxid"+order+"'></div>").insertAfter('#'+this.id+'');

            console.log(content);
            $.get(url + content, function(data){
                console.log(data);
                var translation = data.data.translations[0].translatedText;
                $("#translation-box"+order+"").html(translation);



                var url2 = "https://still-lowlands-64290.herokuapp.com/pjsabc";
                // var content2 =translation;
                // console.log(translation);

                    $.post(url2, {text: translation}, function(data){
                        console.log(JSON.stringify(data.docEmotions));
                        console.log("#emotionboxid"+order);
                        $("#emotionboxid"+order+"").html(JSON.stringify(data.docEmotions));
                    })

            });

    });


// var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
//
// var alchemy_language = new AlchemyLanguageV1({
//     api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
// });
//
// var params = {
//     url: 'http://www.huffingtonpost.com/2010/06/22/iphone-4-review-the-worst_n_620714.html'
// };
//
// alchemy_language.sentiment(params, function (err, response) {
//     if (err)
//         console.log('error:', err);
//     else
//         console.log(JSON.stringify(response, null, 2));
// });