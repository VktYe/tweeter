$(document).ready(function() { //

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
      };
      //takes in an array of tweet objects
      //calls createTweetElement for each tweet
      //then appends each one to the #tweet-container
    };

  const createTweetElement = function(tweet) {
    const $tweet = (`
      <section class="tweet">
        <header class="user-info">
          <div class="avatar-name">
            <img src="${tweet.user.avatars}"/>
            <span>${tweet.user.name}</span>
          </div>
            <span>${tweet.user.handle}</span> 
        </header>
        <article>${tweet.content.text}</article>
        <footer>
          <div>
            <span>${tweet.created_at}</span>
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


  renderTweets(data);
    
});


