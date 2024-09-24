import { EnvConfig } from "./config.development";

const env = process.env.REACT_APP_ENV ?? process.env.NODE_ENV ?? "development";

export type Environment = "production" | "staging" | "int" | "development";

export interface AppConfig extends EnvConfig {
    environment: Environment;
    isDev: boolean;
    isInt: boolean;
    isStaging: boolean;
    isProduction: boolean;
    cdnImg: string;
    cdnExcelTemplates: string;
    cdn: string;
}

const envConfig = require(`./config.${env}`).config as EnvConfig;

export const config: AppConfig = {
    environment: env as Environment,
    isDev: env === "development",
    isInt: env === "int",
    isStaging: env === "staging",
    isProduction: env === "production",
    ...envConfig,
    cdnImg: "https://cdn.modilist.com/img",
    cdnExcelTemplates: "https://cdn.modilist.com/excel-templates",
    cdn: "https://cdn.modilist.com"
};