import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { ArrowLeft, Check, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export function OTPPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "nom@icsagroup.com";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs[lastIndex].current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Veuillez entrer le code à 6 chiffres");
      return;
    }

    setIsLoading(true);

    // Simulate API verification
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, accept any 6-digit code
      // In production, verify with backend
      navigate("/reset-password", { state: { email, otp: otpValue } });
    }, 1500);
  };

  const handleResend = () => {
    setIsResending(true);
    
    // Simulate resend API call
    setTimeout(() => {
      setIsResending(false);
      setCountdown(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputRefs[0].current?.focus();
    }, 1000);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link to="/forgot-password" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2D3194] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Retour</span>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8BC00]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F8BC00]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                <Mail className="w-8 h-8 text-[#F8BC00]" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Vérification par Email
              </h1>
              <p className="text-white/80 text-sm">
                Nous avons envoyé un code à 6 chiffres à
              </p>
              <p className="text-[#F8BC00] font-semibold mt-1">
                {email}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Inputs */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 text-center">
                  Entrez le code de vérification
                </label>
                <div className="flex gap-3 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className={`w-12 h-14 text-center text-2xl font-bold border-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#2D3194] focus:border-[#2D3194] ${
                        digit 
                          ? "border-[#2D3194] bg-[#2D3194]/5" 
                          : "border-gray-200 bg-white"
                      } ${error ? "border-red-500" : ""}`}
                      disabled={isLoading}
                    />
                  ))}
                </div>
                {error && (
                  <p className="text-red-500 text-sm text-center mt-3 flex items-center justify-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {error}
                  </p>
                )}
              </div>

              {/* Resend Section */}
              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isResending}
                    className="text-[#2D3194] hover:text-[#F8BC00] font-semibold text-sm transition-colors disabled:opacity-50"
                  >
                    {isResending ? "Envoi en cours..." : "Renvoyer le code"}
                  </button>
                ) : (
                  <p className="text-gray-600 text-sm">
                    Renvoyer le code dans{" "}
                    <span className="font-semibold text-[#2D3194]">{countdown}s</span>
                  </p>
                )}
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Astuce:</span> Vérifiez votre dossier spam si vous ne recevez pas le code dans les 2 minutes.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !isOtpComplete}
                className="w-full h-14 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Vérification...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Vérifier le code</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Mauvaise adresse email ?{" "}
                <Link to="/forgot-password" className="text-[#2D3194] hover:text-[#F8BC00] font-semibold transition-colors">
                  Modifier
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Besoin d'aide ? Contactez notre support à{" "}
            <a href="mailto:support@icsagroup.com" className="text-[#2D3194] hover:text-[#F8BC00] font-medium transition-colors">
              support@icsagroup.com
            </a>
          </p>
        </div>

        {/* ICSA Logo Footer */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 opacity-60">
            <div className="w-8 h-8 bg-[#2D3194] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs">IC</span>
            </div>
            <div>
              <p className="text-[#2D3194] text-xs font-bold">ICSA Group</p>
              <p className="text-gray-500 text-[10px]">Enterprise Portal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
