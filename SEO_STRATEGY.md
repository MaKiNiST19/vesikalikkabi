# SEO & Site Architecture Strategy: vesikalikkabi.com.tr (B2B Manufacturer)

**Objective:** Dominate the "Vesikalık Kabı" wholesale market by establishing manufacturer authority, preventing cannibalization, and capturing high-intent B2B traffic.

---

## 1. URL Architecture (Clean & Hierarchical)

We will move away from generic "products" to specific "product lines".
**Core Principle:** `Domain > Category > Product Family`.
Variants (Color, Micron) should usually be handled via parameters or fragements, not unique URLs, unless search volume dictates otherwise.

### Structure:

*   **Homepage:** `https://vesikalikkabi.com.tr/`
*   **Main Category Roots:**
    *   `https://vesikalikkabi.com.tr/urunler/tekli-vesikalik-kabi/` (Hub Page)
    *   `https://vesikalikkabi.com.tr/urunler/ciftli-vesikalik-kabi/` (Hub Page)

*   **Product Family Pages (The indexing targets):**
    *   *(Single)*
        *   `.../tekli-vesikalik-kabi/folyo-pvc` (Targeting "Folyo PVC Vesikalık Kabı")
        *   `.../tekli-vesikalik-kabi/buzlu-seffaf`
        *   `.../tekli-vesikalik-kabi/mat-biala`
        *   `.../tekli-vesikalik-kabi/deri-desen-biala`
    *   *(Double)*
        *   `.../ciftli-vesikalik-kabi/biala-ciftli`
        *   `.../ciftli-vesikalik-kabi/ofset-baskili-seffaf`
        *   `.../ciftli-vesikalik-kabi/dikisli-luks-fantezi`

*   **City Landing Pages (Local SEO - Existing):**
    *   `https://vesikalikkabi.com.tr/il/adana-vesikalik-kabi` (Keep flat or folder based, currently `/il/slug` is good)

### What to Avoid:
*   `.../urunler/tekli-vesikalik-kabi-kirmizi-0-15-micron` (Too granular, dilutes authority).

---

## 2. Indexing Strategy (Crawl Budget Management)

We must signal to Google which pages are the "master" pages.

| Page Type | Action | Rationale |
| :--- | :--- | :--- |
| **Homepage** | **INDEX, FOLLOW** | Brand authority. |
| **Category Roots** (Tekli/Çiftli) | **INDEX, FOLLOW** | Navigational hubs. Target broad keywords ("Toptan Vesikalık Kabı"). |
| **Product Families** (e.g., Mat Biala) | **INDEX, FOLLOW** | **Primary SEO Targets.** Specific material intent. |
| **City Pages** | **INDEX, FOLLOW** | Local intent capture. |
| **Product Variants** (Color/Micron) | **CANONICAL to Family** | "Red Mat Biala" should point to "Mat Biala" unless "Red" has massive volume. Typically, B2B buyers search by material, then select color. |
| **Search Results / Filters** | **NOINDEX, FOLLOW** | Prevent duplicate content (e.g., `?sort=price_asc`, `?color=blue`). |
| **Cart / Account** | **NOINDEX, NOFOLLOW** | Utility pages. |

---

## 3. Manufacturer Content Strategy (B2B Focus)

Unlike a retailer who says "Buy this case", a manufacturer says "We produce this capacity with these specs".

### A. Product Family Page Layout (The "Money" Page)
*   **H1:** Technical Name + "İmalatı" (e.g., "Mat Biala Tekli Vesikalık Kabı İmalatı")
*   **Tech Specs Table:** Micron thickness options (0.15/0.25), Material density, Tensile strength (if applicable).
*   **Wholesale Matrix:** "500 qty price" vs "10,000 qty price" (or "Ask for Offer").
*   **Customization Section:** "Hot Stamping", "Serigraphy", "Offset" options explained technically.
*   **Factory Proof:** Video/Gif of the specific machine producing *this* product.

### B. "Manufacturer" Trust Signals
Every page must reinforce:
*   **"Aracı Değil, Üreticiyiz"** (Not a reseller, Manufacturer).
*   **Daily Capacity:** "Günlük 50.000 Adet Üretim Kapasitesi".
*   **Stock Concept:** "Hammadde Stoğu" vs "Hazır Ürün Stoğu".

---

## 4. Structured Data Schema Strategy

We need to tell Google we are a B2B Manufacturer, not a generic shop.

1.  **Organization Schema (Global):**
    *   `@type`: `Organization` (or `LocalBusiness` + `Factory`)
    *   `name`: "Pir Reklam"
    *   `knowsAbout`: ["Vesikalık Kabı Üretimi", "PVC Kaynak", "Ofset Baskı"]
    *   `areaServed`: "TR" (Entire Turkey)

2.  **Product Schema (On Family Pages):**
    *   `@type`: `Product`
    *   `name`: "Mat Biala Vesikalık Kabı"
    *   `brand`: { `@type`: `Brand`, `name`: "Pir Reklam" }
    *   `manufacturer`: { `@type`: `Organization`, `name`: "Pir Reklam" }
    *   `offers`: { `@type`: `AggregateOffer`, `lowPrice`: "...", `highPrice`: "...", `priceCurrency`: "TRY", `offerCount`: "..." }
    *   **CRITICAL:** Add `audience`: { `@type`: `BusinessAudience`, `audienceType`: "Photography Studios, Wholesalers" }

3.  **FAQ Schema:**
    *   On both Category and City pages to capture "How long for shipping?" types of queries in SERP.

---

## 5. Internal Linking Model

This creates the "Web of Authority".

1.  **The "Material" Silo:**
    *   Blog posts about "Choosing the right micron" -> Link to `Folyo PVC` and `Mat Biala` product pages.
    *   Comparison Guide: "Biala vs PVC" -> Links to both family pages.

2.  **The "City" Bridge (Dynamic Linking):**
    *   **Current State:** City pages link to generic `/urunler`.
    *   **New Strategy:** City pages should rotate links to specific families based on region or randomly to boost deep pages.
    *   *Example:* On the "Antalya" page, the text should say: "Antalya'nın nemli havasına dayanıklı **Mat Biala (Link)** ürünlerimizi öneriyoruz."
    *   *Implementation:* Add a `recommendedProducts` array to your City JSON data, linking to specific slugs.

3.  **Footer Links:**
    *   Do not just link "Products". Link the top 5 high-margin families directly in the footer (e.g., "Toptan Mat Biala", "Şeffaf PVC İmalatı").

---

## 6. Scaling & Execution Plan (6 Months)

*   **Month 1: Foundation & Structure**
    *   Refactor `src/lib/data.ts` to support the new Product Families (not just 2 generic products).
    *   Create the 8 specific Landing Pages for the product families identified.
    *   Implement Canonical tags programmatically.

*   **Month 2: City Page Enrichment**
    *   Update City JSONs to include specific product recommendations (Internal Linking).
    *   Add "Shipping to [City]" specific FAQs on product pages (Dynamic).

*   **Month 3: Technical Content (Blog)**
    *   Publish 4 Deep-Dive articles: "0.15 vs 0.25 Micron Difference", "Offset vs Hot Stamp Printing".
    *   Link these articles heavily to product pages.

*   **Month 4: Media & Rich Snippets**
    *   Add production videos to product family pages.
    *   Implement Schema validation.

*   **Month 5: Long-Tail B2B Expansion**
    *   Create pages for: "Driver's License Cases" (Ehliyet Kabı), "Pasaport Kabı" (if applicable) - essentially different use cases for the same machinery.

*   **Month 6: Authority Building**
    *   Digital PR releases about "Vesikalık Kabı Sektöründe Yerli Üretim Hamlesi".
    *   Backlink acquisition from photography forums/associations.
