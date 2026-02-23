import { useEffect, useState } from "react";
import { User, Mail, Phone, MapPin, Building2, Camera, X, Save, Briefcase } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useAutoEntrepreneur } from "../../hooks/useAutoEntrepreneur";
import type { autoAntrepreneurProfile } from "../../types/autoentrepreneur.types";

export function ProfilePage() {

  const { profile, setProfile, getAutoentrepreneurProfile, saveAutoentrepreneurProfile } = useAutoEntrepreneur();
  const [hasChanges, setHasChanges] = useState(false);
  
  useEffect(()=>{
    getAutoentrepreneurProfile();
  },[]);
  
  const handleChange = (field: string, value: string) => {
    setProfile((prev) => {
      const base: autoAntrepreneurProfile = prev ?? {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        businessName: '',
        activityType: '',
        ice: '',
        logo: ''
      };
      return { ...base, [field]: value };
    });
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
    // Here you would typically save to backend
    saveAutoentrepreneurProfile(profile as autoAntrepreneurProfile);
  };

  const handleCancel = () => {
    setHasChanges(false);
  };

  return (
    <div className="max-h-screen bg-[#F5F7FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-6">
        <h1 className="text-3xl font-bold text-[#2D3194]">Mon Profil</h1>
        <p className="text-gray-600 mt-1">Gérez vos informations personnelles et préférences</p>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl">
          {/* Left Section - Personal Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#2D3194] mb-6">
                Informations Personnelles
              </h2>

              {/* Profile Photo */}
              {/* <div className="flex flex-col items-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#F8BC00] rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0ab00] transition-colors">
                    <Camera className="w-5 h-5 text-[#2D3194]" />
                  </button>
                </div>
                <button className="mt-4 text-sm text-[#2D3194] hover:text-[#F8BC00] font-medium transition-colors flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Importer une image
                </button>
              </div> */}

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      Prénom
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="firstName"
                        type="text"
                        value={profile?.firstName || ''}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Nom
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="lastName"
                        type="text"
                        value={profile?.lastName || ''}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Nom d'activite */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Nom d'activite
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="businessName"
                      type="text"
                      value={profile?.businessName || ''}
                      onChange={(e) => handleChange("businessName", e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Téléphone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={profile?.phone || ''}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="activityType" className="text-gray-700 font-medium">
                    Type d'activite
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="activityType"
                      type="text"
                      value={profile?.activityType || ''}
                      onChange={(e) => handleChange("activityType", e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="ice" className="text-gray-700 font-medium">
                    ICE
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="ice"
                      type="text"
                      value={profile?.ice || ''}
                      onChange={(e) => handleChange("ice", e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-gray-700 font-medium">
                    Addresse
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="address"
                      type="text"
                      value={profile?.address || ''}
                      onChange={(e) => handleChange("address", e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl"
                    />
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                <Button
                  onClick={handleCancel}
                  disabled={!hasChanges}
                  variant="outline"
                  className="flex-1 h-12 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-xl font-semibold disabled:opacity-50"
                >
                  <X className="w-5 h-5 mr-2" />
                  Annuler
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={!hasChanges}
                  className="flex-1 h-12 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold disabled:opacity-50"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-bold text-[#2D3194] mb-4">
                Aperçu du Profil
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Les modifications seront reflétées ici en temps réel.
              </p>

              {/* Preview Card */}
              <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-6 text-white shadow-lg">
                {/* Profile Photo Preview */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <User className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">
                    {profile?.firstName} {profile?.lastName}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{profile?.businessName}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-4"></div>

                {/* Info Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F8BC00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#F8BC00]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60">Nom d'activity</p>
                      <p className="text-sm font-medium truncate">{profile?.businessName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F8BC00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#F8BC00]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60">Téléphone</p>
                      <p className="text-sm font-medium">{profile?.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F8BC00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-[#F8BC00]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60">Type d'activite</p>
                      <p className="text-sm font-medium">{profile?.activityType}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F8BC00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#F8BC00]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60">Addresse</p>
                      <p className="text-sm font-medium">{profile?.address}</p>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-center gap-2 text-[#F8BC00]">
                    <div className="w-2 h-2 bg-[#F8BC00] rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-[#F8BC00]/10 rounded-xl border border-[#F8BC00]/20">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#2D3194]">Note:</span> Vos modifications ne seront visibles par les autres utilisateurs qu'après avoir cliqué sur "Enregistrer".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
