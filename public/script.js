function greet(name) {
  return `Hello, ${name}!`;
}

// Update the heading when running in the browser
if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");
  if (heading) {
    heading.textContent = greet("World");
  }
}

// Export for Node test runner
if (typeof module !== "undefined") {
  module.exports = { greet };
}
