const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Exotel API Running');
});

app.get('/customer/validate', (req, res) => {

    console.log('Passthru Request Received');

    console.log(req.query);

    let customerNumber = req.query.CallFrom;

    // Normalize number
    customerNumber = customerNumber.trim();
    customerNumber = customerNumber.replace(/^91/, '');
    customerNumber = customerNumber.replace(/^0/, '');

    console.log('Normalized Number:', customerNumber);

    const registeredNumbers = [
        '9880847047',
        '9790571549'
    ];

    if (registeredNumbers.includes(customerNumber)) {

        return res.status(200).send('registered');

    } else {

        return res.status(302).send('not_registered');
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
