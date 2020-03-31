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

        // add playerName
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
      var playerWon = $(this).next().text();

      // No player present
      if(playerWon === ''){
        $('#message').text('No player assigned!');
      } else {

        // player found
        $('#message').html('Player <b>'+ playerWon +'</b> won!');
      }
    });
  });
});