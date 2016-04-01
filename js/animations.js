$(document).ready(function() {

// initially hide Tweet button and character
// count button.  Changed CSS style to display: NONE for
// tweet-controls.

// when click on tweet-compose unhide tweet-controls
$('.tweet-compose').on('click', function() {
  $(this).css({height: '5em'});
  $('#tweet-controls').css({display: 'block'});
});

// when click outside of tweet-compose, hide, unless
// tweet-compose has value.
$('.tweet-compose').blur(function() {
    if(!$('.tweet-compose').val()) {
        $('.tweet-compose').css({height: '2.5em'});
        $('#tweet-controls').css({display: 'none'});
    }
})

// id char-count should decrease as value is inputed into
// tweet-compose box.
var maxLength = 140;
$('textarea').keyup(function() {
    var length = maxLength - $(this).val().length;
    $('#char-count').text(length);

    // id char-count should turn red when 10 or less characters
    // and counter should change to max length Exceeded
    if (length < 11) {
        $('#char-count').css({color: 'red'});
    }
    else {
        $('#char-count').css({color: 'black'});
    }

    // tweet-submit button should be hidden if length >= 0
    if (length <= 0) {
        $('#tweet-submit').hide();
        $('#char-count').text('Max Length Exceeded');
    }
    else {
        $('#tweet-submit').show();
    }
})

// When tweet-submit has value to be clicked/submitted a new
// tweet should be created and added to the tweet stream in the
// main column, using the users fake profile image in the top-left
// and username/fullname
// Clears text-compose also

$('button').on('click', function() {
     var newTweet = $('.tweet').clone().eq(0);
     var userText = $('.tweet-compose').val();
     var userName = "@chotch.McGee";
     var avatar = 'img/alagoon.jpg';
     var fullname = 'Chotch McGee';

     newTweet.find('.tweet-text').html(userText);
     newTweet.find('.username').html(userName);
     newTweet.find('.avatar').attr('src',avatar);
     newTweet.find('.fullname').html(fullname);

     $('#stream').prepend(newTweet);

     $('.tweet-compose').val('');
     $('button').hide();
     $('.tweet-compose').css({height: '2.5em'});
     $('#tweet-controls').css({display: 'none'});
 });

  // only show tweet actions when hover over them.
  // changing display to none in CSS for actions.
  // .icon action-reply
  // .icon action-retweet
  // .icon action-favorite
  // .icon action-more
  // .tweet-actions li


  $(document).on('mouseenter', '.tweet',function(){
  $(this).find('.tweet-actions').css({"visibility": "visible"});
});

  $(document).on('mouseleave', '.tweet',function(){
  $(this).find('.tweet-actions').css({"visibility": "hidden"});
});


// retweet/timestamp/reply should be hidden by default.
// shoulde expand if you click on the tweet.

$(document).on('click', '.content', function() {
  $(this).children('.stats').toggle();
})


});  // THIS IS THE CLOSING DOCUMENT TAG
