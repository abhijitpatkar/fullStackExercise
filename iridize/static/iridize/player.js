$(document).ready(function(){
     var responseDict ={}
     //alert("Hi");
     $(responseJson.steps).each(function(key, value){
             responseDict[value.id] = value;
        });
$('#id_next').click( function(){
//alert("Next clicked");
//alert(this.value)
resObj = responseDict[this.value]
$(resObj.selector).text(resObj.content)
this.value = resObj.next

});


});
