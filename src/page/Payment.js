import React from "react";
import {useLocation} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
const payment = () => {
  const stripePromise = loadStripe();
};
