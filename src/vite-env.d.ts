/// <reference types="vite/client" />
// Extend the Vite import.meta.env typing with the application-specific variables
interface ImportMetaEnv {
	readonly VITE_EMAILJS_SERVICE_ID?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID_TRIAL?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID_CONTACT?: string;
	readonly VITE_EMAILJS_PUBLIC_KEY?: string;
	// add other VITE_ variables here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
