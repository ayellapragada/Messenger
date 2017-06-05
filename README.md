# README

Fafbook Messenger - A messaging mobile app built in React Native integrated into Fafbook.

[Fafbook][livesite]

[livesite]: http://www.fafbook.us/#/

Fafbook Messenger is a mobile app built using React Native, that works with a Ruby on Rails backend as an API server for JSON.
Messenger uses the exact same backend as it's parent web app, Fafbook, and due to that users can communicate in real time cross platform.

The overall stack uses React Native for the front end, Redux for state management, Rails to create an API server to serve up JSON and a PostgreSQL database.


## Features & Implementation

### Real Time Chat

Due to the fact that this is a light weight messaging service, the main feature is the ability to send messages between users, which uses the Pusher API service to let other users know that they've receieved a new message.

### Cross Platform Emoji Support

To allow users more communication options, there is support on both sides for native emojis. Emojis sent from mobile automatically get translated for the web by the front end `Message` component.

## Future Directions for this project

In addition to what's been done already, I will continue to work on this project.

### Chat Bubbles and Screen Overlay

The messaging app is currently a standalone app that needs to be opened up and minimzed. The end goal is to have Link Bubbles overlayed on the screen that allow the user to easily open any chat that they're interested in. 

### Better Storage of User Data and Conversations

Currently the app auto signs in a user once the app is opened, but the next step would be to auto load the user into the state instead. 
