 $(document).ready(function(){
        
  // load modal on page load
  $('#staticBackdrop').modal('show');

  // modal
  $('#gt').on('click',function(){
    $('#staticBackdrop').modal('hide');
  });

  // after-click disable
  $('.btn-disable').on('click',function(){
    $(this).attr('disabled',true);
    $(this).removeClass('btn-outline-danger');
    $(this).addClass('btn-danger');
  });

  // reset page
  $('#reset').on('click',function(){
    window.location.reload();
  });

  // clear fields
  $('#clearFields').on('click',function(){
    $('#playerName').val('');
    $('#playerNumber').val('');
    $('#numAssigned').attr('hidden',true);
  });

  // Assign player to numbers
  $('#assignPlayer').on('click',function(){
    var playerName = $('#playerName').val();
    var playerNumber = $('#playerNumber').val();
    console.log(playerName, playerNumber);

    // looping through each button with '.number' class
    $('.number').each(function(){
      var data = $(this).text();
      if(playerNumber === data){
        console.log('match');

        // assigned message
        $('#numAssigned').attr('hidden',false);

        // added playerName
        $(this).siblings().text(playerName);

        // break after match
        return false;
      } else {
        console.log('no match');
        $('#numNotAssigned').attr('hidden',true);
      }
    });

    // show which player won
    $('.number').on('click',function(){
      var playerWon = $(this).siblings().text();

      // No player present
      if(playerWon == ''){
        $('#mainContent').append(`
          <div class="container">
            <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
              No player assigned!
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        `);
        return false;
      } else {

        // player found
        $('#mainContent').append(`
          <div class="container">
            <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
              Player <strong>`+ playerWon +`</strong> won!!
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        `);
      }
    })
  });
});