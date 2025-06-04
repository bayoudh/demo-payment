"use client";

import { PayPalScriptProvider as Provider } from "@paypal/react-paypal-js";

const PAYPAL_CLIENT_ID = "test"; // In production, use environment variables

export function PayPalScriptProvider({ children }: { children: React.ReactNode }) {
  const initialOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  return (
    <Provider options={initialOptions}>
      {children}
    </Provider>
  );
}