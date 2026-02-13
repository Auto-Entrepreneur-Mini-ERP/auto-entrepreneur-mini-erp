import { useState } from "react";
import { autoEntrepreneurApi } from "../api/autoEntrepreneur.api";
import type { autoAntrepreneurProfile } from "../types/autoentrepreneur.types";

export const useAutoEntrepreneur = () => {
  const [headerData, setHeaderData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
  });

  const [profile, setProfile] = useState<autoAntrepreneurProfile>();

  const getHeaderData = async () => {
    const result = await autoEntrepreneurApi.getProfile();

    if (result.data) {
      setHeaderData({
        firstName: result.data.user.firstName,
        lastName: result.data.user.lastName,
        businessName: result.data.businessName,
      });
    }
  };

  const getAutoentrepreneurProfile = async () => {
    const result = await autoEntrepreneurApi.getProfile();

    if (result) {
      setProfile({
        firstName: result.data.user.firstName,
        lastName: result.data.user.lastName,
        businessName: result.data.businessName,
        ice: result.data.ice,
        phone: result.data.user.phone,
        address: result.data.user.address,
        activityType: result.data.activityType,
      })
    }
  };

  const saveAutoentrepreneurProfile = async (data: autoAntrepreneurProfile) => {

    const autoEData = {
      autoEntrepreneur:{
        businessName: data.businessName,
        ice: data.ice
    },
    user:{
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
    }
    }

    const result = await autoEntrepreneurApi.updateProfile(autoEData);

    if(result.data) {
      return result.data
    }
  };

  return {
    headerData,
    profile,
    setProfile,
    getHeaderData,
    getAutoentrepreneurProfile,
    saveAutoentrepreneurProfile,
  };
};
