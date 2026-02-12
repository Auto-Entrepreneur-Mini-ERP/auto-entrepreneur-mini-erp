import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Lock, Eye, EyeOff, CheckCircle2, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Password strength requirements
  const requirements = [
    { label: "Au moins 8 caractères", met: password.length >= 8 },
    { label: "Une lettre majuscule", met: /[A-Z]/.test(password) },
    { label: "Une lettre minuscule", met: /[a-z]/.test(password) },
    { label: "Un chiffre", met: /\d/.test(password) },
    { label: "Un caractère spécial", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const allRequirementsMet = requirements.every((req) => req.met);
  const passwordsMatch = password === confirmPassword && confirmPassword !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords
    if (!allRequirementsMet) {
      setError("Le mot de passe ne répond pas à tous les critères");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to login with success message
      navigate("/login", { state: { passwordReset: true } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8BC00]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F8BC00]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                <Lock className="w-8 h-8 text-[#F8BC00]" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Nouveau Mot de Passe
              </h1>
              <p className="text-white/80 text-sm">
                Créez un mot de passe sécurisé pour votre compte
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Nouveau Mot de Passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrez votre nouveau mot de passe"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="pl-12 pr-12 h-14 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl text-base"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              {password && (
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Critères du mot de passe :
                  </p>
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${req.met ? "text-green-700" : "text-gray-600"}`}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Confirmer le Mot de Passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setError("");
                    }}
                    className={`pl-12 pr-12 h-14 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl text-base ${
                      confirmPassword && !passwordsMatch ? "border-red-300" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {confirmPassword && !passwordsMatch && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Les mots de passe ne correspondent pas
                  </p>
                )}
                {passwordsMatch && (
                  <p className="text-green-600 text-sm flex items-center gap-1 mt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Les mots de passe correspondent
                  </p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-700 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !allRequirementsMet || !passwordsMatch}
                className="w-full h-14 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Réinitialisation...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Réinitialiser le mot de passe</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Retour à la{" "}
                <Link to="/login" className="text-[#2D3194] hover:text-[#F8BC00] font-semibold transition-colors">
                  page de connexion
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
