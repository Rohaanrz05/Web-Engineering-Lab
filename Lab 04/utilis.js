/**
 * Task 11: Utilities for asynchronous operations and counters
 */

// Returns a promise that resolves after the specified milliseconds
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Higher-order function producing an auto-incrementing counter closure
export function makeCounter(start = 1) {
  let count = start;
  return () => count++;
}