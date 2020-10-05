const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQ1tgIviXWHJQ9uAmh23pj1cRX4vXDRYddSe3wkbK4RDvgt0v0tXWwCLPWV3GKymwuV9Zn6JFui8s911UB675Ms005ZvlOVVA')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//To setup an API
//1. App config
const app =express();

//2. MiddleWares
app.use(cors({origin:true}));
app.use(express.json());

//3.API routes
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create',async(request,response)=>{
    const total = request.query.total;
    console.log('Payment request received boom !!! for this amount >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    });

    //ok-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
//4.Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/awanee-challenges/us-central1/api