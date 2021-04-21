import { createApp as createApp_, createSSRApp as createSSRApp_ } from 'vue'
import App from './App.vue'

import 'vant/lib/index.css';

export async function createApp(type) {
  const app = typeof window === 'undefined' ? createSSRApp_(App) : createApp_(App);
  return {
    app
  };
}
