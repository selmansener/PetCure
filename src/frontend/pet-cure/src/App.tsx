import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store/store';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { config } from './config';
import { Provider } from 'react-redux';
import { Router } from './router/router';
import { routes } from './router/routes';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { theme } from './themes/default-theme';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Etc/UTC");

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'querystring', 'htmlTag', 'path', 'subdomain']
    },
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <CssBaseline enableColorScheme />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Router routes={routes} isPublic={true} currentAccountRole="user" environment={config.environment} />
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
