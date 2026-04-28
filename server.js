const express = require('express');
const app = express();

app.get('/test-playback', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  res.send({
    start_call_playback: {
      playback_to: "callee",
      type: "text",
      value: "Hello, this is a test IVR from Exotel"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
