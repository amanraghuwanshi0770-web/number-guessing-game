const movies = [
  { title: "Money Heist", img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
  { title: "Squid Game", img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
  { title: "Wednesday", img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg" },
  { title: "Alice in Borderland", img: "https://image.tmdb.org/t/p/w500/i5X9wD1dJz2aI8hJb1LJ8pZ2VZl.jpg" },
  { title: "Narcos", img: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg" },
  { title: "Vikings", img: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" }
];

const grid = document.getElementById("movieGrid");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <img src="${movie.img}">
    <div class="movie-title">${movie.title}</div>
  `;

  grid.appendChild(card);
});