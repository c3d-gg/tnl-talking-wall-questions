// Regenerate questions.js from questions.txt
// Usage: node build.js
const fs = require('fs');

const raw = fs.readFileSync('questions.txt', 'utf8');
const lines = raw.split('\n');
const items = [];
let cur = null;

for (const line of lines) {
  const t = line.replace(/\s+$/, '');
  if (t.trim() === '') continue;
  const m = t.match(/^(TRUE|FALSE)\s+(.*)$/);
  if (m) {
    if (cur) items.push(cur);
    cur = { answer: m[1], text: m[2].trim() };
  } else if (cur) {
    // continuation of a wrapped question
    cur.text = (cur.text + ' ' + t.trim()).replace(/\s+/g, ' ').trim();
  }
}
if (cur) items.push(cur);

fs.writeFileSync('questions.js', 'window.QUESTIONS = ' + JSON.stringify(items) + ';\n');
console.log(`Wrote questions.js — ${items.length} questions ` +
  `(${items.filter(i => i.answer === 'TRUE').length} TRUE, ` +
  `${items.filter(i => i.answer === 'FALSE').length} FALSE)`);
