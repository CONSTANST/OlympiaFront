import {useLocation} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51MbLbgGzrh9Ois4wYtKRAZkaUaN5Qji9chIMO56r3cainb3IVYUeEGISXMfR0G2wXDCAgPDHYkJdiEWUqS9N8cB100B2y0HzYb"
  );
  const location = useLocation();

  const {seats, category, mezzaninePrice, orchestrePrice, eventName, mail} =
    location.state;

  const totalPrice =
    category === "Mezzanine" ? seats * mezzaninePrice : seats * orchestrePrice;
  console.log(totalPrice);

  return (
    <div>
      <div className="event-body">
        <div className="event-payement">
          <h2>Payment Page</h2>
          <p>Il ne vous reste plus qu'un étape pour vous offrir</p>
          <p className="bold"> {eventName}</p>
          <p>Vous allez payer</p>
          <p className="bold">
            {totalPrice} € (frais de protection et frais de port inclus).
          </p>
          <div className="divider" />
          <Elements
            stripe={stripePromise}
            options={{style: {base: {fontSize: "16px", height: "100px"}}}}
          >
            <CheckoutForm
              productName={eventName}
              totalPrice={totalPrice}
              name={mail}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
