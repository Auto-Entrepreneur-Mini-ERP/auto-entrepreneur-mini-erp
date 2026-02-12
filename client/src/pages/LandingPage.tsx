import { Link } from "react-router";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Wallet, 
  UserCog, 
  Briefcase, 
  Truck, 
  FileBarChart, 
  Settings,
  CheckCircle2,
  BarChart3,
  Shield,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Award,
  Clock,
  HeadphonesIcon
} from "lucide-react";
import { Button } from "../components/ui/button";

export function LandingPage() {
  const modules = [
    {
      icon: LayoutDashboard,
      title: "Tableau de Bord",
      description: "Vue d'ensemble complète avec KPIs en temps réel et analytics avancées"
    },
    {
      icon: Wallet,
      title: "Comptabilité",
      description: "Gestion financière intégrée avec suivi des factures et paiements"
    },
    {
      icon: UserCog,
      title: "Ressources Humaines",
      description: "Gestion du personnel, congés et évaluations de performance"
    },
    {
      icon: Briefcase,
      title: "Développement Commercial",
      description: "CRM et pipeline de ventes pour optimiser vos opportunités"
    },
    {
      icon: Truck,
      title: "Opérations",
      description: "Suivi logistique et gestion des opérations en temps réel"
    },
    {
      icon: FileBarChart,
      title: "Rapports & Analytics",
      description: "Rapports personnalisables et insights data-driven"
    },
    {
      icon: Settings,
      title: "Administration",
      description: "Configuration système et gestion des utilisateurs"
    },
    {
      icon: Globe,
      title: "Intégration Globale",
      description: "Connectivité avec vos outils et systèmes existants"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Interface rapide et réactive pour une productivité maximale"
    },
    {
      icon: Shield,
      title: "Sécurité Enterprise",
      description: "Protection des données avec chiffrement de niveau bancaire"
    },
    {
      icon: Users,
      title: "Collaboration en Temps Réel",
      description: "Travaillez ensemble efficacement à travers tous les départements"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancées",
      description: "Insights intelligents pour des décisions éclairées"
    }
  ];

  const stats = [
    { number: "94+", label: "Années d'Excellence" },
    { number: "50K+", label: "Transactions/Mois" },
    { number: "99.9%", label: "Uptime Garanti" },
    { number: "24/7", label: "Support Client" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2D3194] rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div>
                <h2 className="text-[#2D3194] font-bold text-xl">ICSA Group</h2>
                <p className="text-[#7A7A7A] text-xs">Enterprise Portal</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-[#2D3194] transition-colors font-medium">
                Fonctionnalités
              </a>
              <a href="#modules" className="text-gray-700 hover:text-[#2D3194] transition-colors font-medium">
                Modules
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#2D3194] transition-colors font-medium">
                À Propos
              </a>
              <Link 
                to="/login" 
                className="text-[#2D3194] hover:text-[#F8BC00] transition-colors font-medium"
              >
                Connexion
              </Link>
              <Link to="/register">
                <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl px-6 h-11">
                  Commencer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Link to="/login">
                <Button variant="outline" className="border-[#2D3194] text-[#2D3194] rounded-xl">
                  Connexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F8BC00]/10 text-[#2D3194] px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">94 Ans d'Excellence en Logistique</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#2D3194] mb-6 leading-tight">
                Votre Portail d'Entreprise
                <span className="block text-[#F8BC00] mt-2">Tout-en-Un</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gérez l'ensemble de vos opérations commerciales avec une plateforme ERP moderne, 
                intuitive et conçue pour les entreprises de logistique de classe mondiale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/register">
                  <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl px-8 h-14 text-lg w-full sm:w-auto">
                    Créer un Compte
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    className="border-2 border-[#2D3194] text-[#2D3194] hover:bg-[#2D3194] hover:text-white rounded-xl px-8 h-14 text-lg w-full sm:w-auto"
                  >
                    Se Connecter
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8BC00]" />
                  <span className="text-gray-700 font-medium">Installation Rapide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8BC00]" />
                  <span className="text-gray-700 font-medium">Support 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8BC00]" />
                  <span className="text-gray-700 font-medium">Mises à Jour Gratuites</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F8BC00]" />
                  <span className="text-gray-700 font-medium">Données Sécurisées</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                <div className="space-y-6">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-[#2D3194]">Tableau de Bord</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#F8BC00]/20 rounded-full"></div>
                      <div className="w-20 h-4 bg-gray-100 rounded"></div>
                    </div>
                  </div>

                  {/* Mock KPI Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl mb-3"></div>
                        <div className="w-16 h-6 bg-[#2D3194]/20 rounded mb-2"></div>
                        <div className="w-20 h-3 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Chart */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-32 h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[40, 65, 45, 80, 55, 75, 60].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-[#2D3194]/20 rounded-t-lg transition-all hover:bg-[#2D3194]/40"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F8BC00] rounded-2xl rotate-12 opacity-90 shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2D3194] rounded-2xl -rotate-12 opacity-90 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2D3194]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#F8BC00] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D3194] mb-4">
              Pourquoi Choisir ICSA ERP ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète conçue pour transformer votre entreprise avec des outils puissants et intuitifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#2D3194]/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#2D3194]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2D3194] transition-colors">
                    <Icon className="w-7 h-7 text-[#2D3194] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3194] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D3194] mb-4">
              Modules Intégrés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tous les outils dont vous avez besoin pour gérer votre entreprise, réunis dans une seule plateforme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#F8BC00] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#F8BC00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F8BC00] transition-colors">
                    <Icon className="w-6 h-6 text-[#2D3194] group-hover:text-white transition-colors" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-[#2D3194] mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F8BC00]/10 text-[#2D3194] px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Leader du Secteur depuis 1932</span>
              </div>

              <h2 className="text-4xl font-bold text-[#2D3194] mb-6">
                94 Années d'Excellence et d'Innovation
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ICSA Group est un pilier de l'industrie logistique depuis près d'un siècle. 
                Notre plateforme ERP combine notre expertise légendaire avec les technologies les plus avancées.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3194] mb-1">Héritage de Confiance</h4>
                    <p className="text-gray-600">Une réputation construite sur la fiabilité et l'excellence opérationnelle</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3194] mb-1">Innovation Continue</h4>
                    <p className="text-gray-600">Investissement constant dans les dernières technologies et pratiques</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F8BC00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D3194] mb-1">Expertise Mondiale</h4>
                    <p className="text-gray-600">Solutions éprouvées adaptées aux défis logistiques complexes</p>
                  </div>
                </div>
              </div>

              <Link to="/register">
                <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl px-8 h-12">
                  Découvrir Notre Solution
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2D3194] rounded-2xl p-8 text-white">
                <Clock className="w-10 h-10 text-[#F8BC00] mb-4" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-white/80">Support Technique Disponible</p>
              </div>

              <div className="bg-[#F8BC00] rounded-2xl p-8 text-[#2D3194] mt-8">
                <Users className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">1000+</div>
                <p className="text-[#2D3194]/80">Utilisateurs Actifs</p>
              </div>

              <div className="bg-[#F8BC00] rounded-2xl p-8 text-[#2D3194] -mt-8">
                <TrendingUp className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">150%</div>
                <p className="text-[#2D3194]/80">Croissance Annuelle</p>
              </div>

              <div className="bg-[#2D3194] rounded-2xl p-8 text-white">
                <Award className="w-10 h-10 text-[#F8BC00] mb-4" />
                <div className="text-3xl font-bold mb-2">94</div>
                <p className="text-white/80">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#2D3194] to-[#1f2266] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F8BC00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8BC00] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Rejoignez des centaines d'entreprises qui font confiance à ICSA ERP pour gérer leurs opérations quotidiennes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="bg-[#F8BC00] hover:bg-[#e0ab00] text-[#2D3194] rounded-xl px-8 h-14 text-lg font-semibold w-full sm:w-auto">
                Commencer Gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2D3194] rounded-xl px-8 h-14 text-lg font-semibold w-full sm:w-auto"
            >
              <HeadphonesIcon className="mr-2 w-5 h-5" />
              Contacter un Expert
            </Button>
          </div>

          <p className="text-white/70 mt-8 text-sm">
            Aucune carte bancaire requise • Configuration en 5 minutes • Support gratuit inclus
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F8BC00] rounded-xl flex items-center justify-center">
                  <span className="text-[#2D3194] font-bold">IC</span>
                </div>
                <div>
                  <h3 className="font-bold">ICSA Group</h3>
                  <p className="text-xs text-gray-400">Enterprise Portal</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Leader en solutions logistiques depuis 1932
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-[#F8BC00] transition-colors">Fonctionnalités</a></li>
                <li><a href="#modules" className="hover:text-[#F8BC00] transition-colors">Modules</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Mises à Jour</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-[#F8BC00] transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Conditions</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Sécurité</a></li>
                <li><a href="#" className="hover:text-[#F8BC00] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 ICSA Group. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#F8BC00] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8BC00] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8BC00] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
