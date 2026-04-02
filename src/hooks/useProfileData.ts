// Hook to get profile & article data based on current language
import { useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";

// FR data (default)
import * as profileFR from "../data/profile";
import { articles as articlesFR } from "../data/articles";

// EN data
import * as profileEN from "../data/profile.en";
import { articles as articlesEN } from "../data/articles.en";

export function useProfileData() {
    const { language } = useLanguage();

    return useMemo(() => {
        if (language === "en") {
            return {
                personalInfo: profileEN.personalInfo,
                experiences: profileEN.experiences,
                education: profileEN.education,
                certifications: profileEN.certifications,
                awards: profileEN.awards,
                skills: profileEN.skills,
                volunteer: profileEN.volunteer,
                communityActivities: profileEN.communityActivities,
                communityEvents: profileEN.communityEvents,
                communityStats: profileEN.communityStats,
                professionalStats: profileEN.professionalStats,
            };
        }
        return {
            personalInfo: profileFR.personalInfo,
            experiences: profileFR.experiences,
            education: profileFR.education,
            certifications: profileFR.certifications,
            awards: profileFR.awards,
            skills: profileFR.skills,
            volunteer: profileFR.volunteer,
            communityActivities: profileFR.communityActivities,
            communityEvents: profileFR.communityEvents,
            communityStats: profileFR.communityStats,
            professionalStats: profileFR.professionalStats,
        };
    }, [language]);
}

export function useArticlesData() {
    const { language } = useLanguage();

    return useMemo(() => {
        return language === "en" ? articlesEN : articlesFR;
    }, [language]);
}
