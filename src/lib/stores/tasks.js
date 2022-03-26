import { writable } from "svelte/store"
import { browser } from "$app/env"

import { defaultBoards, defaultCurrent } from "$lib/data/tasks"

// Setting up the stores and saving them in the localstorage

export const boards = writable(
  browser && localStorage.boards ? JSON.parse(localStorage.boards) ?? defaultBoards : defaultBoards
)

boards.subscribe(value => {
  if (browser) {
    // Saving the boards as a stringified object
    localStorage.setItem("boards", JSON.stringify(value))
  }
})

// Storing the current selected board
export const currentBoard = writable(
  browser ? localStorage.current ?? defaultCurrent : defaultCurrent
)

currentBoard.subscribe(value => {
  if (browser) {
    localStorage.setItem("current", value)
  }
})
