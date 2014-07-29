#Chat App
###A simple chat application using a non-relational database

##How it works:
>Messages are posted to and pulled from a heroku server using JSON.
>
>An underscore template renders an array of posts to the DOM.
>
>jQuery methods and CSS declarations provide UX transitions.
>
>Moments.js formats date and time.

##Overview:
- Input a username to be reused in the interface as well as stored to each new message post
- Intro view closes to reveal the message view
- Post a new message containing type from the message input field, the previously stored username, date, time, and appID.
- The last 50 messages stored to the database (from any connected chat app following naming conventions) will show every second.
