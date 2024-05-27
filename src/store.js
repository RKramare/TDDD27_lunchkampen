import { writable } from 'svelte/store';

export const score = writable(0);
export const minutes = writable(0);
export const seconds = writable(0);
export const selectedGame = writable('wordle');

/**
 * @typedef {Object} Game
 * @property {number} index
 * @property {string} gameId
 * @property {string} name
 * @property {string} url
 * @property {boolean} isEmbeded
 */

/**
 * @type {import('svelte/store').Writable<Object.<string, Game>>}
 */
export const games = writable();
export const gamesLoading = writable(true);