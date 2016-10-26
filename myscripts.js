var content=document.getElementsByClassName("userContent");  // Find the elements
// var x = $(".userContent").find("p").first().html();
// console.log(x[1]);
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
        // $("<div class='translaton' id='translationid"+order+"'>"+x[order].innerText+"</div>").insertAfter('#'+this.id+'');
    });
});



    var url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";


    $(document).ready(function(){


        $(document).on("click", ".icon", function(){
            // var position = $(".userContent").offset();
            // var width = $(".userContent").width();
            // console.log(position)
            //
            // $("#translation-box").css("left", (position.left + width) + "px");
            // $("#translation-box").css("top", position.top + "px");
            // $("#translation-box").css("height", $(".userContent").height() + "px");
            // $("#translation-box").css("z-index:10000000");

            // console.log(this.id);
            order = parseInt(this.id.charAt(6));
            // console.log($(".userContent").html());
            // var content = $(".userContent").find("p").first().html();
            var content = x[order].innerText;
            $("#boxid"+order+"").append("<div id='translation-box"+order+"' style='background-color: lightblue; position:absolute; width:200px; height:100px'></div>");

            console.log(content);
            $.get(url + content, function(data){
                console.log(data);
                $("#translation-box"+order+"").html(data.data.translations[0].translatedText);
            });

        });
    });
