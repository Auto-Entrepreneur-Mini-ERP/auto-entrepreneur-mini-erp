import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email) {
      setError("Veuillez entrer votre adresse email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Veuillez entrer une adresse email valide");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to OTP page with email
      navigate("/otp", { state: { email } });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link to="/login" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2D3194] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Retour à la connexion</span>
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
                Mot de passe oublié ?
              </h1>
              <p className="text-white/80 text-sm">
                Pas de souci, nous vous enverrons des instructions pour le réinitialiser
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Adresse Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nom@icsagroup.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className="pl-12 h-14 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl text-base"
                    disabled={isLoading}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {error}
                  </p>
                )}
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Note:</span> Un code de vérification à 6 chiffres sera envoyé à votre adresse email.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>Envoyer le code</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Vous vous souvenez de votre mot de passe ?{" "}
                <Link to="/login" className="text-[#2D3194] hover:text-[#F8BC00] font-semibold transition-colors">
                  Se connecter
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
