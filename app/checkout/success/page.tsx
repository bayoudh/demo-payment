"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container flex flex-col items-center justify-center py-20 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-full bg-green-100 p-6 dark:bg-green-900/20"
      >
        <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-500" />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold tracking-tight md:text-4xl"
      >
        Thank You for Your Order!
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4 max-w-md text-muted-foreground"
      >
        Your payment has been processed successfully. You will receive an email confirmation shortly.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8"
      >
        <Button asChild className="gap-2">
          <Link href="/products">
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}