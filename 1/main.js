//jqdocready

$(document).ready(function(){
  $( "#p1 span" ).text(1);
    $("#addButton").click(function(){
      row = $("<tr></tr>");
      col1 = $('<td class="td-1"><button class="btn btn-danger" id="delete"><i class="fas fa-trash fa-lg"></i></i>delete</button><button class="btn btn-primary" data-customerID="clone"><i class="fa fa-clone fa-lg"></i>clone</button></td>');
      col2 = $('<td class="td-2"><input type="number" class="form-control" id="numberInput"/></td> ');
      col3 = $('<td class="td-3"><input type="type" class="form-control" id="type"/></td>');
      col4 = $('<td class="td-4"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="radioButton0" id="Radio1" value="option1"><label class="form-check-label" for="inlineRadio1">New</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="radioButton0" id="Radio2" value="option2"><label class="form-check-label" for="inlineRadio2">In progress</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="radioButton0" id="Radio3" value="option2"><label class="form-check-label" for="inlineRadio2">Confirmed</label></div></td>')
      row.append(col1,col2,col3,col4).prependTo("#bodyTable");  

      let rowCount = $("#tab_logic tr").length-1;
      $( "#p1 span" ).text(rowCount);

     
    });
    
   //clone
    $("#tab_logic").on('click','[data-customerID="clone"]',function(){
      tr = $(this).closest("tr").clone();  
      tr.insertAfter($(this).closest("tr")); 

      let rowCount = $("#tab_logic tr").length-1;
      $( "#p1 span" ).text(rowCount);
  
    })
    
    //delete
    $("#tab_logic").on('click', '#delete', function () {
      $(this).closest('tr').remove();
      let rowCount = $("#tab_logic tr").length-1;
      $( "#p1 span" ).text(rowCount);
  });

  //radio button
  // $('.form-check-input').click(function(){
  //   let count=1
  //   $(this).attr('name', 'radioButton0'+count);
        
  //     count++;
  // })
    $('.form-check-input').click(function() {
      $('.table tr').each(function(i) {
        $(this).find(':radio').prop('name', function(_, name) {
          return name + (i + 1);
        });
      });
  })


  $("tr").on('click', '#Radio3', function () {
  //$('#Radio3').click(function() {
  
    if (this.checked) {
       $('#numberInput').prop('disabled', true); // If checked enable item   
    } 
    // if (!$(this).is(":checked")) {
    //     $('#numberInput').prop('disabled', false); // If checked disable item                  
    // }
});



});

