# Laboratorio 5 (6)
This is a mini blog (bulletin board) developed with HTML, CSS and JS. The app consumes the public API DummyJSON - Posts to list, search and create posts, implemented with UI States idle, loading, success, empty and error.

## Functionalities
* Posts list: Shows all the posts in cards with a title, content, tags, likes and views.
* Posts search: Filters posts by text using query params (?q=).
* UI States: Idle, Loading (spinner), Success, Empty and Error (with a retry button) properly implemented.

## Project structure
```
.
├── README.md
├── css
│   └── styles.css
├── index.html
└── js
    ├── api.js
    ├── app.js
    └── ui.js

```

## API used (DummyJSONPosts)
Base URL: https://dummyjson.com
| # | Method | URL                    | **Description** |
|:-:|:------:|:----------------------:|:----------------:|
| 1 | GET    | /posts?limit=30        | Lists all the posts |
| 2 | GET    | /posts/search?q={texto}| Searches for text posts |
| 3 | POST   | /posts/add             | Creates a new post |



Esta actividad no fue terminada a tiempo, porfavor tome eso en cuenta y haga la penalización respectiva (gracias).