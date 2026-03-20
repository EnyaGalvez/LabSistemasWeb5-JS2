var API_BASE = "https://dummyjson.com";

function getAllPosts() {
  var url = API_BASE + "/posts?limit=30";

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Error del servidor: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      return data.posts;
    });
}

function searchPostsByText(searchText) {
  var encodedText = encodeURIComponent(searchText);
  var url = API_BASE + "/posts/search?q=" + encodedText;

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Error del servidor: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      return data.posts;
    });
}

function createPost(title, body, tags) {
  var url = API_BASE + "/posts/add";

  var postData = {
    title: title,
    body: body,
    tags: tags,
    userId: 1
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Error del servidor: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}