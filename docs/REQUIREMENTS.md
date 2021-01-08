# TWITTER CLONE SOFTWARE REQUIREMENTS

## GOALS

Create a Twitter clone for users to search Tweets and view them

## USER STORIES

1. As a viewer I want to input my search to search for tweets
2. As a viewer I want to be able to see the tweets
3. As a viewer I wanna be able to view text, photos, gifs, videos, of the tweets
4. As a viewer I want to see trending hashtags and use them
5. As a viewer I want to click on trending hashtags to see the tweets for that hashtags
6. As a viewer I want to click to the next page so that I can see the next page of the tweets

## FLOW DIAGRAM

- User -> Homepage
- User -> Search for Tweets -> API getTweets(search) -> Show Tweets
- User -> Click on Trending -> API getTweets(hashtag) -> Show Tweets
- User -> Next Page -> API getNextPage(search, page) -> Show Tweets

## BUSINESS REQUIREMENTS

- This page allow users to search for tweets based on a specific input or hashtag.

- This page shows the list of tweets based on the search. It will show Author, Text, images, video, gifs (if available) and date for each tweet.

- This page will show 10 tweets only, then a user can retrieve the next 10 page.

- This page will show the trending hashtag in a list and allow users to click on the hashtags and search for it.

- Show the profile picture of the person using the app.

## TECHNICAL REQUIREMENTS

- Javascript
- Twitter API
- Create a Twitter Developer Account
- Next page will be shown only when results will be available on a next page
- Moment.js for showing how long ago the tweet was greated
