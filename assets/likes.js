function getLikes(slug) {
  return parseInt(localStorage.getItem(`likes-${slug}`)) || 0;
}

function hasLiked(slug) {
  return localStorage.getItem(`liked-${slug}`) === 'true';
}

function toggleLike(slug, button) {
  if (hasLiked(slug)) return;

  const count = getLikes(slug) + 1;
  localStorage.setItem(`likes-${slug}`, count);
  localStorage.setItem(`liked-${slug}`, 'true');

  button.innerText = `♥ Liked (${count})`;
  button.classList.add('liked');
}

function initLikes() {
  document.querySelectorAll('.like-btn').forEach(button => {
    const slug = button.dataset.slug;
    const count = getLikes(slug);

    button.innerText = hasLiked(slug)
      ? `♥ Liked (${count})`
      : `♡ Like (${count})`;

    button.onclick = () => toggleLike(slug, button);
  });
}

window.addEventListener('load', initLikes);
