import { useEffect, useState } from "react";
import { ReactNode } from "react";
import pkg from '@shopify/app-bridge-react';
import { AppProvider } from '@shopify/polaris';
import { useLoaderData } from "@remix-run/react";

interface LoaderData {
  ENV: {
    SHOPIFY_API_KEY: string;
  };
}

// Fallback translations
const defaultTranslations = {
  Polaris: {
    Common: {
      loading: "Loading"
    }
  }
};

const { Provider } = pkg;

interface AppBridgeConfig {
  host: string;
  apiKey: string;
  forceRedirect: boolean;
}

export function AppBridgeProvider({ children }: { children: ReactNode }) {
  const { ENV } = useLoaderData<LoaderData>();
  const [translations, setTranslations] = useState<any>(defaultTranslations);
  const [config, setConfig] = useState<AppBridgeConfig | null>(null);

  useEffect(() => {
    // Load translations
    type PolarisTranslations = typeof import('@shopify/polaris/locales/en.json');
    import('@shopify/polaris/locales/en.json')
      .then((module: { default: PolarisTranslations }) => setTranslations(module.default))
      .catch(error => console.error('Failed to load translations:', error));

    // Set app bridge config
    if (typeof window !== 'undefined') {
      const host = window.location.host;
      setConfig({
        host: host,
        apiKey: ENV.SHOPIFY_API_KEY,
        forceRedirect: true
      });
    }
  }, [ENV.SHOPIFY_API_KEY]);

  return (
    <AppProvider i18n={translations}>
      {config ? <Provider config={config}>{children}</Provider> : children}
    </AppProvider>
  );
}