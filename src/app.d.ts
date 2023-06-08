// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: import('pocketbase').default;
      currentUser: import('pocketbase').default['authStore']['model'];
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
