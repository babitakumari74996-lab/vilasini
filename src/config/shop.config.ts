/**
 * Central shop configuration — the ONLY place client-specific data lives.
 *
 * This repo is a template clone. To onboard a new client, duplicate the repo,
 * then edit THIS FILE only (plus render.yaml + .env.example). Components read
 * every client detail from here — never hardcode shop data in JSX/TSX.
 *
 * NOTE ON ENV OVERRIDES: each value falls back to the VITE_* env var when set
 * at build time (Render dashboard → Environment). Keep the names EXACTLY as
 * written here — env var names are case-sensitive on Render (BUG 4.4).
 */

const env = import.meta.env as Record<string, string | undefined>;

export const shopConfig = {
  /** Display name — shown in nav logo, footer, page titles, JSON-LD. */
  shopName: env["VITE_SHOP_NAME"]?.trim() || "Vilasini",

  /** Short brand line — used in hero subtitle and footer blurb. */
  tagline:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Sarees, suits, lehengas and ethnic wear",

  tagline_footer:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Vilasini is a D2C fashion boutique in Kolkata, West Bengal, specialising in sarees, suits, lehengas and ethnic wear with WhatsApp and Instagram ordering.",

  /** Approximate starting year based on the studio's published 16+ years of design experience. */
  foundedYear: env["VITE_SHOP_FOUNDED_YEAR"] ?? "2010",

  /** Brand accent — primary color from brand identity. */
  primaryColor: "#1A1A1A",
  /** Secondary brand color — complementary shade. */
  secondaryColor: "#FFFFFF",

  /**
   * WhatsApp number — DIGITS ONLY + country code (91XXXXXXXXXX format).
   * No "+", no spaces, no dashes or the wa.me link breaks (BUG 4.2).
   * Official studio contact.
   */
  whatsappNumber:
    env["VITE_WHATSAPP_NUMBER"]?.trim() || "+91 98765 43210",

  /** Instagram handle (no "@" required in value, kept for display). */
  instagramHandle: env["VITE_INSTAGRAM_HANDLE"] ?? "vilasini_kolkata",

  /** Public contact email — footer, account profile, JSON-LD. */
  contactEmail:
    env["VITE_CONTACT_EMAIL"] ?? "contact@vilasini.in",

  /** Deployed site URL — JSON-LD `sameAs` + OG URL. */
  websiteUrl:
    env["VITE_WEBSITE_URL"] ?? "https://vilasini.store",

  /**
   * Products: this template ships a STATIC catalog in `src/lib/products.ts`
   * (no backend — static frontend only). Products live in that file because
   * they need bundled image imports; components consume them via the
   * `products` export. Swap the file contents to change the catalog.
   */
  productsSource: "static", // "static" (no backend in this repo)

  /** Store location — footer "Visit the store" + JSON-LD. */
  address: {
    street:
      env["VITE_SHOP_STREET"] ??
      "Kolkata",
    locality:
      env["VITE_SHOP_LOCALITY"] ??
      "Kolkata",
    city: env["VITE_SHOP_CITY"] ?? "Kolkata",
    region: env["VITE_SHOP_REGION"] ?? "West Bengal",
    postalCode: env["VITE_SHOP_POSTAL"] ?? "700001",
    country: "India",
  },

  /**
   * Google Maps listing link — used by the "Find us on Map" button.
   */
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vilasini+Kolkata+West+Bengal",

  /** Google Maps embed (iframe) URL — leave "" until an embed link is provided. */
  googleMapsEmbedUrl: env["VITE_GOOGLE_MAPS_EMBED_URL"] ?? "",

  /** Display phone (spaces fine) + tel: href (digits only). */
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",

  /** Opening hours line — footer + boutiques. */
  hours:
    env["VITE_SHOP_HOURS"] ?? "Monday – Saturday · 10 AM - 8 PM",

  /** Geo coordinates for JSON-LD — from the provided Google Maps listing. */
  lat: 22.5726,
  lng: 88.3639,

  /** Hero headline — first line white, second line gold italic. */
  hero: {
    part1: "Vilasini",
    part2: "Ethnic Wear",
  },

  /**
   * Today's Fashion configuration — when set, replaces the default shop
   * configuration for a "Today's Fashion" brand setup. All values fall back
   * to the shopConfig defaults when empty strings are provided.
   */
  todayFashion: {
    /** Enable Today's Fashion brand mode. */
    enabled:
      env["VITE_TODAY_FASHION_ENABLED"] !== "false",

    /** Display name — shown in nav logo, footer, page titles, JSON-LD. */
    shopName:
      env["VITE_TODAY_FASHION_SHOP_NAME"] ??
      "Vilasini",

    /** City — used in page titles and descriptions. */
    city:
      env["VITE_TODAY_FASHION_CITY"] ??
      "Kolkata",

    /** Street address — footer "Visit the store". */
    street:
      env["VITE_TODAY_FASHION_STREET"] ??
      "Kolkata",

    /** Locality — used in full address. */
    locality:
      env["VITE_TODAY_FASHION_LOCALITY"] ??
      "Kolkata",

    /** Region — used in full address. */
    region:
      env["VITE_TODAY_FASHION_REGION"] ??
      "West Bengal",

    /** Postal code. */
    postalCode:
      env["VITE_TODAY_FASHION_POSTAL"] ??
      "700001",

    /** Country. */
    country: "India",

    /** Google Maps URL. */
    googleMapsUrl:
      env["VITE_TODAY_FASHION_GOOGLE_MAPS_URL"] ??
      "https://www.google.com/maps/search/?api=1&query=Vilasini+Kolkata+West+Bengal",

    /** Contact email. */
    contactEmail:
      env["VITE_TODAY_FASHION_CONTACT_EMAIL"] ??
      "contact@vilasini.in",

    /** Instagram handle. */
    instagramHandle:
      env["VITE_TODAY_FASHION_INSTAGRAM_HANDLE"] ?? "vilasini_kolkata",

    /** WhatsApp number. */
    whatsappNumber:
      env["VITE_TODAY_FASHION_WHATSAPP_NUMBER"] ??
      "919876543210",

    /** Opening hours. */
    hours:
      env["VITE_TODAY_FASHION_HOURS"] ??
      "Monday – Saturday · 10:00 – 20:00",

    /** Latitude for JSON-LD. */
    lat: env["VITE_TODAY_FASHION_LAT"]
      ? parseFloat(env["VITE_TODAY_FASHION_LAT"])
      : 22.5726,

    /** Longitude for JSON-LD. */
    lng: env["VITE_TODAY_FASHION_LNG"]
      ? parseFloat(env["VITE_TODAY_FASHION_LNG"])
      : 88.3639,
  } as const,
} as const;

/** Short hand for components: shopName + city for descriptions. */
export const shop = {
  name:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? shopConfig.todayFashion.shopName
      : shopConfig.shopName,
  city:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.city
      ? shopConfig.todayFashion.city
      : shopConfig.address.city,
  tagline:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? `${shopConfig.todayFashion.shopName} — Fashion Store in ${shopConfig.todayFashion.city}`
      : shopConfig.tagline,
  fullAddress:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? `${shopConfig.todayFashion.street}, ${shopConfig.todayFashion.locality}, ${shopConfig.todayFashion.city}, ${shopConfig.todayFashion.region} ${shopConfig.todayFashion.postalCode}, ${shopConfig.todayFashion.country}`
      : `${shopConfig.address.street}, ${shopConfig.address.locality}, ${shopConfig.address.city}, ${shopConfig.address.region} ${shopConfig.address.postalCode}, ${shopConfig.address.country}`,
} as const;