"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { PayPalButtons } from "@/components/payment/paypal-buttons";
//import { toast } from "@/components/ui/use-toast";

export function CartSummary() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const tax = subtotal * 0.07; // 7% tax
  const shipping = subtotal > 100 ? 0 : 10.99; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
 /*    toast({
      title: "Payment successful",
      description: "Thank you for your purchase!",
    }); */
    
    // Clear the cart and redirect to success page after a short delay
    setTimeout(() => {
      clearCart();
      router.push('/checkout/success');
    }, 2000);
  };

  const handlePaymentError = () => {
    setPaymentStatus('error');
    /* toast({
      title: "Payment failed",
      description: "There was an issue processing your payment. Please try again.",
      variant: "destructive",
    }); */
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.product.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Tax (7%)</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        {paymentStatus === 'success' && (
          <div className="mb-4 flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-800 dark:bg-green-950/50 dark:text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span>Payment successful! Redirecting to confirmation...</span>
          </div>
        )}
        
        {paymentStatus === 'error' && (
          <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-400">
            <AlertCircle className="h-5 w-5" />
            <span>Payment failed. Please try again.</span>
          </div>
        )}
        
        {paymentStatus === 'idle' && (
          <div className="w-full space-y-4">
            <PayPalButtons 
              amount={total}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              setIsProcessing={setIsProcessing}
            />
            <div className="text-center text-xs text-muted-foreground">
              By completing this purchase, you agree to our{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}