const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;