import { writable } from 'svelte/store';

export const score = writable(0);
export const minutes = writable(0);
export const seconds = writable(0);
export const selectedGame = writable('wordle');