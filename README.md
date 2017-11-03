# GitPromise
## A simple demonstration on Javascript promises and how to use them.

In this project, I am making an asynchronous request to the Github V3 API and return with profile pictures of all people following Linus Torvalds.

```javascript
  window.onload = function(){
	var btn = document.getElementById('btn');
	btn.addEventListener('click', function(e){
		e.preventDefault();
			var promise = new Promise(function(resolve, reject){
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.open('GET', 'https://api.github.com/users/torvalds/followers', true);
					xmlhttp.onreadystatechange = function(){
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							if(Array.isArray(JSON.parse(xmlhttp.responseText))){
								var followers = JSON.parse(xmlhttp.responseText);
								resolve(followers);
							}
						}else
						{
							let error =  JSON.parse(xmlhttp.statusText);
							reject(error);
						}
					}
					xmlhttp.send(null);
				});

				promise.then(function(followers){
					var pics = document.getElementById('img').innerHTML = "";
					
					followers.forEach(function(follower){
							var pics = document.getElementById('img');
							var img = document.createElement('img');
							img.setAttribute('src', follower.avatar_url);
							img.setAttribute('width', '200px');
							img.setAttribute('height', '200px');
							pics.appendChild(img);
					});

				}).catch(function(x){
					alert("Failed");
				});


			});			
		}
```



The request returns a promise which is an array of users following Torvalds then for each follower, I return their profile avatar.
