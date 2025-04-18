"use client";
import { motion, AnimatePresence } from 'framer-motion';

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
}

const EmailInput = ({ email, setEmail, error }: EmailInputProps) => {
  return (
    <div className="mb-4">
      <motion.label
        htmlFor="email"
        className="block text-white font-medium mb-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Adresse email
      </motion.label>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          required
          aria-required="true"
          aria-describedby={error ? "email-error" : undefined}
          aria-invalid={error ? "true" : "false"}
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            id="email-error"
            className="mt-2 text-accent text-sm font-medium"
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailInput;
