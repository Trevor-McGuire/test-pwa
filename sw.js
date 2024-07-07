// Install event
self.addEventListener('install', event => {
  self.skipWaiting(); // Activate worker immediately
});

// Activate event
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  // Start sending notifications every 20 seconds after activation
  setInterval(() => {
    self.registration.showNotification("Test Notification", {
      body: "This is a test notification from your PWA!",
      icon: '/path/to/icon.png' // Optional: Add a path to an icon
    });
  }, 20000); // 20000 milliseconds = 20 seconds
});