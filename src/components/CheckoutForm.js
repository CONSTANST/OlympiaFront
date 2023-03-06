import {useState} from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const [isPaid, setIsPaid] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "user.id",
      });
      const response = await axios.post(`http://localhost:3000/payment`, {
        amount: "total",
        title: "event.name",
        token: stripeResponse.token.id,
      });
      if (response.data) {
        setIsPaid(true);
      } else {
        alert("Une erreur est survenue, veuillez rééssayer.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return isPaid ? (
    <p>Merci pour votre achat.</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disable={!stripe}>
        Réservez
      </button>
    </form>
  );
};
export default CheckoutForm;
