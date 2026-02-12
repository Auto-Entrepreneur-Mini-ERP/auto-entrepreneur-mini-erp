import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LogIn, Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Logo from "../components/Logo";
import AuthBranding from "../components/auth/AuthBranding";
import NeedHelpSection from "../components/auth/NeedHelpSection";
import { useAuthenticate } from "../hooks/useAuthneticate";
import { setCookie } from "../utils/setCookies";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //custom hook
  const { errors, login } = useAuthenticate();


  // Check if redirected from password reset
  const passwordReset = location.state?.passwordReset;

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);

    //  API call
    const result = await login(email, password)
    
    setIsLoading(false);
    if (result) {
      setCookie('token', result.jwtToken);
      navigate("/app/dashboard");
    }
  };

  return (
    <div className="h-screen bg-white flex">
      <AuthBranding />

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <Logo />
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#2D3194] mb-2">Connexion</h2>
            <p className="text-gray-600">Entrez vos identifiants pour accéder à votre compte</p>
          </div>

          {/* Success Message after Password Reset */}
          {passwordReset && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-green-900">Mot de passe réinitialisé avec succès !</p>
                <p className="text-sm text-green-700 mt-1">Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Errors */}
            {errors && (
                errors.map((err, key) => (
                <p key={key} className="text-sm text-red-600">{err}</p>
                ))
              )}
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Adresse Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre.email@auto-manager.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 border-gray-300 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2D3194] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-[#2D3194] hover:text-[#F8BC00] transition-colors font-medium"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold transition-all hover:shadow-lg disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Connexion en cours...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Se connecter
                </div>
              )}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Nouveau chez Auto-Manager ?</span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 text-[#2D3194] hover:text-[#F8BC00] font-medium transition-colors"
              >
                Créer un compte
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </form>

          {/* Help Text */}
          <NeedHelpSection />
        </div>
      </div>
    </div>
  );
}