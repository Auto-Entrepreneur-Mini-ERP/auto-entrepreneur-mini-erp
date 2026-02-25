import LogoWhite from "../LogoWhite"

function AuthBranding() {
  return (
    <>
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#2D3194] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#2D3194]"></div>

        <div className="relative z-10 flex flex-1 flex-col justify-center px-16 xl:px-24 text-white mb-3 mt-8">
          {/* Logo */}
          <div className="mb-10">
            <LogoWhite />
          </div>

          {/* Content */}
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Bienvenue sur votre Portail d'Auto Entrepreneur
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Accédez à votre système complet de gestion d'entreprise avec une intégration transparente entre tous les fonctionalité.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#2D3194]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">94 Ans d'Excellence</h4>
                  <p className="text-sm text-white/80">Héritage de confiance dans la logistique et les solutions d'entreprise</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#2D3194]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Système Intégré</h4>
                  <p className="text-sm text-white/80">Plateforme unifiée pour toutes les opérations commerciales</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#2D3194]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sécurisé & Fiable</h4>
                  <p className="text-sm text-white/80">Sécurité de niveau entreprise pour vos données</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <p className="text-sm text-white/60">
              © 2026  Auto-Manager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthBranding