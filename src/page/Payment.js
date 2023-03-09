import {useLocation} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");
  const location = useLocation();

  const {seats, category, mezzaninePrice, orchestrePrice, eventName} =
    location.state;

  const totalPrice =
    category === "Mezzanine" ? seats * mezzaninePrice : seats * orchestrePrice;
  console.log(totalPrice);

  return (
    <div>
      <div className="event-body">
        <div className="event-container">
          <h2>Payment Page</h2>
          <p>Il ne vous reste plus qu'un étape pour vous offrir</p>
          <p className="bold"> {eventName}</p>
          <p>Vous allez payer</p>
          <p className="bold">
            {totalPrice} € (frais de protection et frais de port inclus).
          </p>
          <div className="divider" />
          <Elements stripe={stripePromise}>
            <CheckoutForm productName={eventName} totalPrice={totalPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
