import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-center px-4">
      {/* Floating gradient blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute top-20 w-72 h-72 bg-linear-to-br from-purple-600 to-violet-700 rounded-full blur-3xl opacity-30"
      />

      {/* 404 Text Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-8xl font-extrabold text-foreground drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 text-lg text-muted-foreground max-w-md"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <Link to="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft size={18} />
            Go Back Home
          </Button>
        </Link>
      </motion.div>

      {/* Floating animation shapes */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
        className="absolute bottom-20 right-20 w-20 h-20 bg-primary/20 rounded-xl blur-md"
      />

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
        }}
        className="absolute bottom-28 left-20 w-28 h-28 bg-purple-400/20 rounded-full blur-xl"
      />
    </div>
  );
}
