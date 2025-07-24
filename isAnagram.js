const n = "sas"; // Try edit me
const t = "sas";

function isAnagram(n, t) {
  const map = {};
  if (n.length !== t.length) return false;
  for (let char of n) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
}

// Log to console
console.log(isAnagram(n, t));
