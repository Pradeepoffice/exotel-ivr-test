const express = require('express');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Health Check API
app.get('/', (req, res) => {
    res.send('Exotel API Running');
});

// Exotel Passthru Validation API
app.get('/customer/validate', (req, res) => {

    console.log('Passthru Request Received');

    console.log(req.query);

    // Read customer number from Exotel Passthru
    let customerNumber = req.query.CallFrom || req.query.From;

    // Check if number exists
    if (!customerNumber) {

        console.log('Customer Number Missing');

        return res
            .status(400)
            .type('text/plain')
            .send('{"select":"number_missing"}');
    }

    // Normalize number
    customerNumber = customerNumber.trim();
    customerNumber = customerNumber.replace(/^91/, '');
    customerNumber = customerNumber.replace(/^0/, '');

    console.log('Normalized Number:', customerNumber);

    // Sample Registered Numbers
    const registeredNumbers = [
        '8050064807',
        '9790571549'
    ];

    // Validation Logic
    if (registeredNumbers.includes(customerNumber)) {

        console.log('Customer Registered');

        return res
            .status(200)
            .type('text/plain')
            .send('{"select":"registered"}');

    } else {

        console.log('Customer Not Registered');

        return res
            .status(200)
            .type('text/plain')
            .send('{"select":"not_registered"}');
    }
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
