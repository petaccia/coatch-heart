"use client";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
}

const EmailInput = ({ email, setEmail, error }: EmailInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-white font-medium mb-2">
        Adresse email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        required
        aria-required="true"
        aria-describedby={error ? "email-error" : undefined}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p id="email-error" className="mt-2 text-accent text-sm font-medium" role="alert">{error}</p>}
    </div>
  );
};

export default EmailInput;
