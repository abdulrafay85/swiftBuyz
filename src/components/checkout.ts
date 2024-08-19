import { loadStripe } from "@stripe/stripe-js";

export async function Checkout({ lineItems }: any) {
  let stripePromise: any = null;

  let getStripe = async () => {
    if (!stripePromise) {
      stripePromise = await loadStripe(process.env.NEXT_PUBLIC_API_KEY!);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  if (!stripe) {
    console.error("Stripe failed to initialize");
    return;
  }

  const { error } = await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?sessionOid={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}`, // ensure you provide a valid cancel URL
  });

  if (error) {
    console.error("Stripe checkout error:", error);
  }
}