"use client";

import { useState } from "react";
import { PayPalButtons as ReactPayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonsProps {
  amount: number;
  onSuccess: () => void;
  onError: () => void;
  setIsProcessing: (isProcessing: boolean) => void;
}

export function PayPalButtons({ 
  amount, 
  onSuccess, 
  onError,
  setIsProcessing 
}: PayPalButtonsProps) {
  const [isPaid, setIsPaid] = useState(false);

  const createOrder = (_data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toFixed(2),
          },
        },
      ],
    });
  };

  const onApprove = (_data: any, actions: any) => {
    setIsProcessing(true);
    return actions.order.capture().then(function (details: any) {
      setIsPaid(true);
      setIsProcessing(false);
      onSuccess();
      
      // In a real application, you would make an API call here to save the order
      console.log("Transaction completed by " + details.payer.name.given_name);
      console.log("Transaction ID: " + details.id);
      return details;
    });
  };

  return (
    <div className={isPaid ? "opacity-50 pointer-events-none" : ""}>
      <ReactPayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "checkout",
          height: 45,
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={() => {
          setIsProcessing(false);
          onError();
        }}
        onCancel={() => {
          setIsProcessing(false);
        }}
      />
    </div>
  );
}