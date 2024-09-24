export interface EnvConfig {
    socialMediaLinks: {
        instagram: string;
        facebook: string;
        twitter: string;
        linkedIn: string;
    },
    petCureApi: string;
}

export const config: EnvConfig = {
    socialMediaLinks: {
        instagram: "https://www.instagram.com/modilistcom/",
        facebook: "https://www.facebook.com/modilistcom",
        twitter: "https://twitter.com/modilistcom",
        linkedIn: "https://www.linkedin.com/company/modilist/"
    },
    petCureApi: "https://localhost:7296"
};