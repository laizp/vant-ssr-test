import { createApp } from './app';

;(async () => {
  const { app } = await createApp('client');
  app.mount('#app', true);
})();
