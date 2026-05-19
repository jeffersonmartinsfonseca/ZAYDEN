const https = require('https');
https.get('https://ibb.co/DP4TtD6t', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log(match ? match[0] : 'not found');
  });
});
