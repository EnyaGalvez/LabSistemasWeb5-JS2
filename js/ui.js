
function showIdleState() {
  hideAllStates();
  document.getElementById("state-idle").classList.remove("hidden");
}

function showLoadingState() {
  hideAllStates();
  document.getElementById("state-loading").classList.remove("hidden");
}

function showSuccessState(posts) {
  hideAllStates();
  var successDiv = document.getElementById("state-success");
  successDiv.classList.remove("hidden");

  renderPostCards(posts);
}

function showEmptyState() {
  hideAllStates();
  document.getElementById("state-empty").classList.remove("hidden");
}

function showErrorState(message) {
  hideAllStates();
  document.getElementById("state-error").classList.remove("hidden");
  document.getElementById("error-message").textContent = message || "Ocurrió un error inesperado.";
}


function hideAllStates() {
  document.getElementById("state-idle").classList.add("hidden");
  document.getElementById("state-loading").classList.add("hidden");
  document.getElementById("state-success").classList.add("hidden");
  document.getElementById("state-empty").classList.add("hidden");
  document.getElementById("state-error").classList.add("hidden");
}

function renderPostCards(posts) {
  var grid = document.getElementById("posts-grid");

  grid.innerHTML = "";

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var card = createPostCard(post);
    grid.appendChild(card);
  }
}

function createPostCard(post) {
  var card = document.createElement("div");
  card.className = "post-card";

  var title = document.createElement("h3");
  title.className = "post-card-title";
  title.textContent = post.title;

  var body = document.createElement("p");
  body.className = "post-card-body";
  var bodyText = post.body || "";
  if (bodyText.length > 120) {
    bodyText = bodyText.substring(0, 120) + "...";
  }
  body.textContent = bodyText;

  var metaDiv = document.createElement("div");
  metaDiv.className = "post-card-meta";

  if (post.tags && post.tags.length > 0) {
    for (var j = 0; j < post.tags.length; j++) {
      var tagSpan = document.createElement("span");
      tagSpan.className = "post-tag";
      tagSpan.textContent = "#" + post.tags[j];
      metaDiv.appendChild(tagSpan);
    }
  }

  var statsDiv = document.createElement("div");
  statsDiv.className = "post-card-stats";

  var likesSpan = document.createElement("span");
  likesSpan.className = "post-stat";
  likesSpan.textContent = "👍 " + (post.reactions && post.reactions.likes !== undefined ? post.reactions.likes : 0) + " likes";

  var viewsSpan = document.createElement("span");
  viewsSpan.className = "post-stat";
  viewsSpan.textContent = "👁 " + (post.views || 0) + " vistas";

  statsDiv.appendChild(likesSpan);
  statsDiv.appendChild(viewsSpan);

  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(metaDiv);
  card.appendChild(statsDiv);

  return card;
}

function showFormLoading() {
  document.getElementById("form-state-idle").classList.add("hidden");
  document.getElementById("form-state-loading").classList.remove("hidden");
  document.getElementById("form-state-success").classList.add("hidden");
  document.getElementById("form-state-error").classList.add("hidden");
}

function showFormSuccess() {
  document.getElementById("form-state-idle").classList.add("hidden");
  document.getElementById("form-state-loading").classList.add("hidden");
  document.getElementById("form-state-success").classList.remove("hidden");
  document.getElementById("form-state-error").classList.add("hidden");
}

function showFormError(message) {
  document.getElementById("form-state-idle").classList.add("hidden");
  document.getElementById("form-state-loading").classList.add("hidden");
  document.getElementById("form-state-success").classList.add("hidden");
  document.getElementById("form-state-error").classList.remove("hidden");
  document.getElementById("form-error-message").textContent = message || "Error al publicar el post.";
}

function showFormIdle() {
  document.getElementById("form-state-idle").classList.remove("hidden");
  document.getElementById("form-state-loading").classList.add("hidden");
  document.getElementById("form-state-success").classList.add("hidden");
  document.getElementById("form-state-error").classList.add("hidden");
}

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add("hidden");
    pages[i].classList.remove("active");
  }

  var targetPage = document.getElementById("page-" + pageId);
  if (targetPage) {
    targetPage.classList.remove("hidden");
    targetPage.classList.add("active");
  }

  var navBtns = document.querySelectorAll(".nav-btn");
  for (var j = 0; j < navBtns.length; j++) {
    navBtns[j].classList.remove("active");
  }
  var activeBtn = document.getElementById("btn-" + pageId);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  window.scrollTo(0, 0);
}


function validateForm() {
  var isValid = true;

  var titleInput = document.getElementById("post-title");
  var bodyInput = document.getElementById("post-body");
  var errTitle = document.getElementById("err-title");
  var errBody = document.getElementById("err-body");

  errTitle.classList.add("hidden");
  errBody.classList.add("hidden");
  titleInput.style.borderColor = "";
  bodyInput.style.borderColor = "";

  if (!titleInput.value.trim()) {
    errTitle.classList.remove("hidden");
    titleInput.style.borderColor = "var(--color-danger)";
    isValid = false;
  }

  if (!bodyInput.value.trim()) {
    errBody.classList.remove("hidden");
    bodyInput.style.borderColor = "var(--color-danger)";
    isValid = false;
  }

  return isValid;
}