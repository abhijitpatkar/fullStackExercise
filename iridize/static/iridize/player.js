$(document).ready(function(){
    /*$.getJSON('/static/iridize/guide.json',function(data){
        console.log(data);


     });*/
     $.ajax({
     url:'/static/iridize/guide.json',
     dataType:'json',
     type:'get',
     cache:false,
     success: function(data){

     var firstTip = data['steps'][0]['contents'];
     var secondTip =  data['steps'][1]['contents'];
     var thirdTip =  data['steps'][2]['contents'];

     //firtElement= document.getElementById("id_1");
     //firtElement.innerHTML = firstTip

        /*$(data.steps).each(function(key, value){

        });*/
      }

      });


});




