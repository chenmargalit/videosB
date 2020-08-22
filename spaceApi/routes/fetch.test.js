const axios = require('axios');

test('should output an array of results', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3000/',
    data: {
      // 1984 currently exists in the database, otherwise we need a different year
      inputYear: 1984,
    },
  });
  expect(res.data.length).toBeGreaterThan(0);
});
