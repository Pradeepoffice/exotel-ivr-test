const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Exotel API Running');
});

app.post('/customer/validate', (req, res) => {

    console.log('Exotel Request Received');

    console.log(req.body);

    const customerNumber = req.body.From;

    const registeredNumbers = [
        '09880847047',
        '09790571549'
    ];

    if (registeredNumbers.includes(customerNumber)) {

        return res.status(200).json({
            status: 'registered',
            customerNumber: customerNumber
        });

    } else {

        return res.status(200).json({
            status: 'not_registered',
            customerNumber: customerNumber
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
