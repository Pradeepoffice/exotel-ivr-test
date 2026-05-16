app.get('/customer/validate', (req, res) => {

    console.log('Passthru Request Received');

    console.log(req.query);

    let customerNumber = req.query.From;

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
