import { setupWorker } from "msw";

export function initialize(application) {
  const worker = setupWorker();

  console.log('Addon initializer');
};

export default {
  initialize
};