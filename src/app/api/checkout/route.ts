import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
})
export async function GET(req: Request) {
  if (req.method === 'GET') {
    console.log('req is######', req)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Full Pint',
            },
            unit_amount: 5000, // Price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://${req.headers.get('host')}/auth/tickets/success`,
      cancel_url: `http://${req.headers.get('host')}/auth/tickets`,
    })
    // console.log('RES IN GET IF IS ', await res)
    // return await res.status(200).json({ message: 'Success', data: session })
    // return res.json()
    console.log('THE SESSION HERE IS', session)
    return Response.json({ sessionId: session.id })
  } else {
    // console.log('res is ', res)
    // res.setHeader('Allow', 'POST')
    // return res.status(405).end('Method Not Allowed')
    throw new Error('Error with checkout api call')
  }
}
