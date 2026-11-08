// Validation checks never send a valid enquiry to Sheets.
// Start the local application before running: node scripts/check-enquiry.mjs
import assert from "node:assert/strict";
const base = "http://127.0.0.1:3000";
const seed = {
  name: "Test Visitor",
  company: "Test Business",
  phone: "+91 98765 43210",
  email: "",
  solutions: ["websites"],
  requirements: "",
  website: "",
};
const cases = [
  ["empty body", {}, 400],
  ["invalid phone", { ...seed, phone: "abcdefghij" }, 400],
  ["invalid email", { ...seed, email: "not-an-email" }, 400],
  ["unknown service", { ...seed, solutions: ["unknown-service"] }, 400],
  ["no service", { ...seed, solutions: [] }, 400],
  ["honeypot", { ...seed, website: "https://example.com" }, 400],
  ["oversized payload", { ...seed, requirements: "x".repeat(17000) }, 413],
];
for (const [name, data, expected] of cases) {
  const response = await fetch(`${base}/api/submit-requirement`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: base },
    body: JSON.stringify(data),
  });
  assert.equal(response.status, expected, name);
  console.log(`PASS ${name}: ${response.status}`);
}
const crossOrigin = await fetch(`${base}/api/submit-requirement`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Origin: "https://example.com",
  },
  body: JSON.stringify(seed),
});
assert.equal(crossOrigin.status, 403);
console.log("PASS cross-origin rejection: 403");
const malformed = await fetch(`${base}/api/submit-requirement`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: "{bad json",
});
assert.equal(malformed.status, 400);
console.log("PASS malformed JSON: 400");
