import { useState } from "react";
import { autoEntrepreneurApi } from "../api/autoEntrepreneur.api";


export const useAutoEntrepreneur = () => {
    const [headerData, setHeaderData] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
    });

    const [profile, setProfile] = useState({});

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
        console.log(result);
        
        if(result.data){
            setProfile(result.data);
        }
    };

    return {
        headerData,
        profile,
        getHeaderData,
        getAutoentrepreneurProfile
    };
};