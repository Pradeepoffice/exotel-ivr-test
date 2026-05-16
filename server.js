app.post('/customer/validate', (req, res) => {

    console.log('Exotel Request Received');

    console.log(req.body);

    // Read customer number from Exotel payload
    const customerNumber = req.body.From;

    // Sample registered numbers
    const registeredNumbers = [
        '09880847047',
        '09790571549'
    ];

    // Validation Logic
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
