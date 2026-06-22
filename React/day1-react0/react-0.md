# Real DOM vs. Virtual DOM (Short Guide)

* **Real DOM:** The actual HTML structure rendered on your screen. Updating it directly is slow because the browser often repaints large parts of the page.
* **Virtual DOM:** A lightweight, invisible copy of the Real DOM kept in your computer's memory. Updating it is extremely fast.

## How it Works
1. **Update:** When data changes, the Virtual DOM is updated first.
2. **Diffing:** It compares the *new* Virtual DOM with the *old* one to find exact changes.
3. **Patching:** It efficiently updates **only** the changed elements in the Real DOM, leaving the rest of the page untouched.

