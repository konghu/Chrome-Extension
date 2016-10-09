/**
 * Created by Kong on 10/8/2016.
 */
// function DOMtoString(document_root) {
//     var html = '',
//         node = document_root.firstChild;
//     while (node) {
//         switch (node.nodeType) {
//             case Node.ELEMENT_NODE:
//                 html += node.outerHTML;
//                 break;
//             case Node.TEXT_NODE:
//                 html += node.nodeValue;
//                 break;
//             case Node.CDATA_SECTION_NODE:
//                 html += '<![CDATA[' + node.nodeValue + ']]>';
//                 break;
//             case Node.COMMENT_NODE:
//                 html += '<!--' + node.nodeValue + '-->';
//                 break;
//             case Node.DOCUMENT_TYPE_NODE:
//                 // (X)HTML documents are identified by public identifiers
//                 html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
//                 break;
//         }
//         node = node.nextSibling;
//     }
//     return html;
// }
//
// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });
//
// document.getElementById("urls").value = DOMtoString(window.location.href);

// function httpGet(theUrl)
// {
//
//     console.log("RUNNED");
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             return xmlhttp.responseText;
//         }
//     }
//     xmlhttp.open("GET", theUrl, false );
//     xmlhttp.send();
// }

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'report_back') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//     }
// });

// chrome.runtime.sendMessage({
//     action: "getSource"
// });

// chrome.tabs.getCurrent(function(tab) {
//     alert(tab.title);
//     console.log("Run");
//     console.log(tab.title);
// });

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log("Run");
    console.log(tab.title);
});
