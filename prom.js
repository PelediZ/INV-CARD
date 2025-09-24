onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    const audio = document.getElementById("myAudio");
    audio.play();
  }, 1000);
};
