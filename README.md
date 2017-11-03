# GitPromise
A simple demonstration on Javascript promises and how to use them.

In this project, I am making an asynchronous request to the Github V3 API and return with profile pictures of all people following Linus Torvalds.

The request returns a promise which is an array of users following Torvalds then for each follower, I return their profile avatar.
