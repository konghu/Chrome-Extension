// x=document.getElementsByClassName("userContent");
// for(var i = 0; i < x.length; i++){
//     x[i].innerText = "H";
// }
//
// document.getElementsByClassName("userContent").innerHTML = "New text!";
//
// document.getElementsByClassName('_1s4v _26aw _5rmj _5fo2 _27oh').style.color="red";


// x=document.getElementsByClassName("userContent");  // Find the elements
// for(var i = 0; i < x.length; i++){
//     // console.log(x[i].innerText);
//     // Change the content
//     x[i].innerText=x[i].innerText + "LOL";
// }
//
//
// x=document.getElementsByClassName("fwb");  // Find the elements
// for(var i = 0; i < x.length; i++){
//     x[i].innerText="Kong is so handsome";    // Change the content
// }


// $(document).ready(function(){
//     console.log('hello');
//
//     $("<div class='box'>Hello world!</div>").insertAfter(".userContent");
// });

$(document).ready(function(){
    $("<button class='icon'>check</button>").insertAfter(".userContent");

});

$(document).ready(function(){
    $("button").click(function(){
        $("<div class='box'>Text Analysis Goes here!</div>").insertAfter(".userContent");
    });
});

// $(document).ready(function(){
//     $(".icon").click(function(){
//         $("box").hide();
//     });
//     $(".icon").click(function(){
//         $("box").show();
//     });
// });