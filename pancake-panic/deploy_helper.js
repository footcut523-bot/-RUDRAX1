const fs = require('fs');
const crypto = require('crypto');

const filePath = 'C:/Users/sneha/.gemini/antigravity/scratch/pancake-panic/index.html';
const buffer = fs.readFileSync(filePath);
const b64 = buffer.toString('base64');
const sha1 = crypto.createHash('sha1').update(buffer).digest('hex');

console.log('Size:', buffer.length);
console.log('SHA1:', sha1);
console.log('Base64 Length:', b64.length);

fs.writeFileSync('C:/Users/sneha/.gemini/antigravity/scratch/pancake-panic/b64.txt', b64);
