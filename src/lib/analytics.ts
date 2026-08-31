declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const MEASUREMENT_ID = 'G-JSC3CHSK7M';

let initialized = false;

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
  return window.gtag;
};

export const initAnalytics = () => {
  if (initialized || !MEASUREMENT_ID) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const gtag = ensureGtag();
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (!MEASUREMENT_ID) return;
  const gtag = ensureGtag();
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
};
