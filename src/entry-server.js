import { createApp } from './app';

export default async function() {
  const { app } = await createApp('server');

  return {
    app
  };
}