import { writable } from 'svelte/store';

/**
 * @typedef {import('firebase').auth.User} User
 */

/**
 * @type {import('svelte/store').Writable<User|null>}
 */
export const user = writable(null);