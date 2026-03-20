var lastSearchText = "";
var currentMode = "all";
var lastPostData = null;

/*
* Funcion encargada de: cargar los posts desde la API y 
* manejar los UI states (loadig -> success / empty / error)
*/
function loadPosts() {
    currentMode = "all";

    updateClearButton();

    showLoadingState();

    getAllPosts()
        .then(function (posts) {
            if (posts && posts.length > 0) {
                showSuccessState(posts);
            } else {
                showEmptyState();
            }
        })
        .catch(function (error) { 
            showErrorState("No se pudieron cargar las publicaciones. " + error.message);
        });
}