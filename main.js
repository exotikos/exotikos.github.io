function redirectWhoAmI() {
    window.location.href = "https://exotikos.github.io/whoami";
  }
  function redirectGist() {
    window.location.href = "https://exotikos.github.io/gists";
  }
  function redirectMemes() {
    window.location.href = "https://exotikos.github.io/memes";
  }
  setInterval(function() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1600) {
      const element = document.getElementById("gists");
      const halfScreenWidth = screenWidth / 2.4;
      element.style.left = halfScreenWidth + "px";
      element.style.transform = `translateX(${halfScreenWidth})`;
    } else if (screenWidth >= 1600) {
    const element = document.getElementById("gists");
    const halfScreenWidth = screenWidth / 2.2;
    element.style.left = halfScreenWidth + "px";
    element.style.transform = `translateX(${halfScreenWidth})`;
    } else if (screenWidth <= 950) {
      const element = document.getElementById("gists");
      element.left = 0 + "px";
      }
}, 2000);
