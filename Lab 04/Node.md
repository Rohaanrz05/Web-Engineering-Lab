# Lab 04: Event Loop & Specificity Analysis

## 1. Specificity Predict & Fix (Task 2)

* **Selector A (`header nav ul li a`):** Specificity `(0, 0, 5)` — Over-specific.
* **Selector B (`.nav-link`):** Specificity `(0, 1, 0)`.
* **Fix using `:where()`:** 
  `:where(header nav ul li) a` resets the contextual container specificity to `(0, 0, 1)`, allowing `.nav-link` `(0, 1, 0)` to win without using `!important`.

---

## 2. Event Loop Execution Order (Task 11)

### Snippet
```javascript
console.log('1: Synchronous start');

setTimeout(() => {
  console.log('2: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask (Promise)');
});

console.log('4: Synchronous end');