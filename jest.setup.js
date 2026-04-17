/**
 * jest.setup.js
 *
 * Runs in the jsdom environment before each test file.
 * Populates the DOM with all elements that app.js queries at load time,
 * so `require('../app.js')` can run without null-reference errors.
 *
 * Jest's jsdom environment does not execute external scripts by default
 * (it requires `runScripts: 'dangerously'`), so the <script> tag in the
 * body is inert and does not need to be stripped.
 */
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

// Extract the <body> content and load it into jsdom.
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
document.body.innerHTML = bodyMatch ? bodyMatch[1] : "";
