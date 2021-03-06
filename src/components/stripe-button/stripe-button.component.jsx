import React from 'react'
import StripeCheckout from 'react-stripe-checkout' 

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey= 'pk_test_51GtFVKCvVU7OJf0fD3f3UtOO2EDWpmTiGAeJI7PJfASiU4evtz7QXu8g0z01LE7Sa8AHC2dLIefwGWiHc56CTPqU00qPqoJMXl'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout label= 'Pay Now' 
        name= 'Crown Clothing' 
        billingAddress 
        shippingAddress 
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey} />
    )
}

export default StripeCheckoutButton