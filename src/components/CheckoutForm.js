import {useState} from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({productName, totalPrice, mail}) => {
  const [isPaid, setIsPaid] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: mail,
      });
      console.log(stripeResponse);
      const response = await axios.post(`http://localhost:3000/payment`, {
        amount: totalPrice,
        title: productName,
        token: stripeResponse.token.id,
      });
      console.log(response);
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
      <CardElement style={{height: "500px"}} />
      <button type="submit" disable={!stripe}>
        Réservez
      </button>
    </form>
  );
};
export default CheckoutForm;
