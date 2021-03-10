var url = "https://steamcommunity.com/id/gigliotti07/inventory/json/730/2";
var url2 = "http://www.json-generator.com/api/json/get/bTOvKZJvKG?indent=2";
const url_n = 'http://www.json-generator.com/api/json/get/cftLKcymgi?indent=2';
const url_nova = 'https://steamcommunity.com/id/gigliotti07/inventory/json/730/2';


var ip_address=$("#ip_address").val();

jQuery.support.cors = true;
$.ajax({
  url: url_nova,
  type: 'GET',
  data: {
    ip:ip_address,
    format:'json'
  },
  jsonpCallback: 'jsonp_callback',
  crossDomain: true,
  dataType: 'json',
  cors: true ,
  secure: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  beforeSend: function (xhr) {
    xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
  },
  success: function(data2){
   console.log(data2)
   
   //Codigo de loop
   var constant2 = "";
   constant2 += "<table>";
   for (const obj of Object.values(data2.rgDescriptions)) {
     
   
     constant2 += "<div class='plan'>";
     constant2 += "<h3>" + obj.appid + "<span>" + obj.instanceid + "</span></h3>";
     constant2 += "<a class='ignup' href=''>Sign up</a>";
     constant2 += "<ul>";
     constant2 += "<li><b>" + obj.descriptions['2']['type'] + "</b></li>";
     constant2 += "<li><b>" + obj.tags['1'].internal_name + "</b></li>";
     constant2 += "</ul>";
     constant2 += "</div>";
     document.getElementById("err2").innerHTML = constant2;
   
   };
   
   constant2 += "</table>";
   
   
   
   
   }
   

   //document.getElementById("demo2").innerHTML = data2.rgInventory["car"]["id"];
  


  
    
});

