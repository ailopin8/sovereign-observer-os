/**
 * jest.setup.js
 *
 * Runs in the jsdom environment before each test file.
 * Populates the DOM with all elements that app.js queries at load time,
 * so `require('../app.js')` can run without null-reference errors.
 */
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "index.html"),
  "utf8"
);

// Load the body content; strip <script> tags so jsdom does not attempt to
// fetch or execute the browser bundle (app.js is loaded explicitly by Jest).
const bodyContent = (
  html.match(/<body[^>]*>([\s\S]*?)<\/body>/i) || ["", ""]
)[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

document.body.innerHTML = bodyContent;
