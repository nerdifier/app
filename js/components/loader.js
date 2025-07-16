export function loadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  if (!loadingScreen) return;

  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 6000);
}