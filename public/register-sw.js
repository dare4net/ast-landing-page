// Only register the service worker in production and if supported by the browser
if (typeof window !== "undefined" && "serviceWorker" in navigator && window.location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope)
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err)
      },
    )
  })
}
