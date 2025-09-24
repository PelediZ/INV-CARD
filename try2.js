window.addEventListener("load", () => {
  const audio = document.getElementById("myAudio");
  audio.play().catch(() => {
    console.log("Autoplay diblokir, menunggu interaksi user...");
    // Tambah event listener untuk play setelah klik pertama
    document.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true }
    );
  });
});
