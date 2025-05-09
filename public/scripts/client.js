$(document).ready(function() {
  // XSS preventing
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };


  // fetch tweets
  const loadTweets = function() {
    $.ajax("/api/tweets", { method: 'GET' })
      .then(function(tweets) {
        $('#tweets-container').empty(); // clear tweets--container so tweets don't duplicate after new tweet submitted
        renderTweets(tweets);
      });
  };


  const createTweetElement = function(tweet) {
    const $tweet = (`
      <section class="tweet">
        <header class="user-info">
          <div class="avatar-name">
            <img src="${tweet.user.avatars}"/>
            <span>${tweet.user.name}</span>
          </div>
          <span class="handle">${tweet.user.handle}</span> 
        </header>
        <article>${escape(tweet.content.text)}</article>
        <footer>
          <div>
            <span>${timeago.format(tweet.created_at)}</span>
          </div>
          <div class="icons">
            <i class="fas fa-bookmark"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </section>
      `);

    return $tweet;
  };
  

  // Form Submition
  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    
    // Form validation
    const $textArea = $(this).find("#tweet-text");
    const tweetText = $textArea.val().trim();
    const $counter = $(this).closest("form").find(".counter");

    // Stop submition if:
    $("#error").slideUp(); // always hide error element

    if (!tweetText) {
      $(".error-text").text("Tweet cannot be empty.");
      $("#error").slideDown();
      return;
    }
    
    if (tweetText.length > 140) {
      $(".error-text").text("Tweet exceeds 140 characters limit.");
      $("#error").slideDown();
      return;
    }

    // Serialize the form data and send it to the server as a query string.
    $.ajax({
      url: "/api/tweets",
      method: "POST",
      data: $(this).serialize(),
      success: function() {
        // Clear text area
        $textArea.val("");
        // Reset the counter
        $counter.text(140).removeClass("negative-count");
        loadTweets();
      },
      error: function() {
        $(".error-text").text("Failed to submit tweet. Please try again.");
        $("#error").slideDown();
      }
    });
  });

  // Toggle new tweet form on compose button click
  $(".compose-button").on("click", function() {
    $(".new-tweet").slideToggle("slow", function() {
      if ($(this).is(":visible")) {
        $("textarea").focus();
      }
    });
    $(this).toggleClass("end-animation");
  });

  loadTweets();
});


