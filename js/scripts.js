
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#rec-responses").show();
    $("input:checkbox[name=rec-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#rec-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
