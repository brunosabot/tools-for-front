export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          // eslint-disable-next-line no-param-reassign
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  // eslint-disable-next-line no-console
                  console.log("New content is available; please refresh.");
                } else {
                  // eslint-disable-next-line no-console
                  console.log("Content is cached for offline use.");
                }
              }
            };
          };
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error("Error during service worker registration:", error);
        });
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
