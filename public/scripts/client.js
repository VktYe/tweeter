$(document).ready(function() { //

  const  tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const createTweetElement = function() {
    const $tweet = (`
      <section class="tweet">
        <header class="user-info">
          <div class="avatar-name">
            <img src="${tweetData.user.avatars}"/>
            <span>${tweetData.user.name}</span>
          </div>
            <span>${tweetData.user.handle}</span> 
        </header>
        <article>${tweetData.content.text}</article>
        <footer>
          <div>
            <span>${tweetData.created_at}</span>
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
    const $tweet = createTweetElement(tweetData);
    $('#tweets-container').append($tweet);
});
