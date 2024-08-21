const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to return the JSON request body
app.post('/success', (req, res) => {
    // const id = req.query.bookingId;
    const paymentData = req.body;
    console.log(paymentData);
    const {
        mihpayid,
        mode,
        status,
        unmappedstatus,
        key,
        txnid,
        amount,
        cardCategory,
        discount,
        net_amount_debit,
        addedon,
        productinfo,
        firstname,
        lastname,
        address1,
        address2,
        city,
        state,
        country,
        zipcode,
        email,
        phone,
        udf1,
        udf2,
        udf3,
        udf4,
        udf5,
        udf6,
        udf7,
        udf8,
        udf9,
        udf10,
        hash,
        field1,
        field2,
        field3,
        field4,
        field5,
        field6,
        field7,
        field8,
        field9,
        payment_source,
        meCode,
        PG_TYPE,
        bank_ref_num,
        bankcode,
        error,
        error_Message,
        cardnum,
    } = paymentData;
    // paymentData.bookingId = id;

    console.log('Is the received hash valid?', status);

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
