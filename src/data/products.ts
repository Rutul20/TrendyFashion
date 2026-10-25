// src/data/products.ts
import type { ChannelInfo, ProductCategory, Product } from "../types";

export const CHANNEL_INFO: ChannelInfo = {
	name: "Trendy Fashion",
	handle: "@trendy-jd",
	tagline: "Style that speaks",
	subTagline: "The Official YouTube Lookbook & Wardrobe Edit by JD",
	youtubeUrl: "https://www.youtube.com/@trendy-jd",
	stats: {
		views: "685K+",
		videos: "160+",
		subscribers: "45K+",
		location: "India",
		joined: "2023",
	},
	description:
		"Curated fashion edits, try-on lookbooks, and high-street ethnic finds featured on Trendy Fashion by JD. Click any look to shop direct on Amazon with verified sizing notes.",
	disclosureText:
		"Trendy Fashion is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for creators to earn advertising fees by linking to Amazon.in. When you purchase through our links, we may earn an affiliate commission at no extra cost to you.",
};

export const CATEGORIES: readonly ProductCategory[] = [
	"All",
	"Ethnic Wear",
	"Co-Ord Sets",
	"Anarkali Sets",
	"Straight Kurti Sets",
];

export const PRODUCTS: Product[] = [
	{
		id: "pinkmint-cotton-coord-set",
		code: "TF01",
		title: "Pinkmint Pure Cotton Printed Kurta with Pant Co-Ord Set",
		badge: "Trending Co-Ord",
		category: "Co-Ord Sets",
		priceRange: "₹649",
		rating: 4.6,
		reviewCount: 840,
		image: "/products/tf01.png?v=clean",
		shortDesc: "Breathable pure cotton floral co-ord set with Mandarin V-neckline, 3/4 sleeves, and functional side pockets.",
		description: "Featured in our Latest Amazon Ethnic Haul. Made from 100% lightweight cotton with an effortless A-line cut, matching trousers, and drawstring waist. Fits true to size.",
		highlights: [
			"100% Pure breathable soft cotton fabric",
			"Mandarin V-neck collar with 3/4 sleeves",
			"Includes matching printed trousers with functional side pockets",
			"Drawstring closure for flexible waist fit",
			"Available in sizes S to 3XL"
		],
		stylingTip: "Pair with minimalist silver hoops, a woven tan tote, and slip-on mules for an easy, polished daytime look.",
		amazonUrl: "https://www.amazon.in/dp/B0DYP64WQ4/?coliid=I7DEF1KD8EW2T&colid=1CV34JZKMXFDG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
		youtubeVideoUrl: "https://www.youtube.com/@trendy-jd"
	},
	{
		id: "celary-striped-kurti-palazzo-set",
		code: "TF02",
		title: "Celary Striped Straight Kurti with Printed Palazzo Pants Set",
		badge: "Daily Essential",
		category: "Straight Kurti Sets",
		priceRange: "₹599",
		rating: 4.5,
		reviewCount: 620,
		image: "/products/tf02.png?v=clean",
		shortDesc: "Rust-red striped straight calf-length kurti paired with wide-leg ethnic printed palazzo trousers.",
		description: "The ideal everyday work and college staple. Crafted from wrinkle-resistant soft rayon that holds its shape all day with flattering vertical stripes.",
		highlights: [
			"Soft premium rayon fabric with smooth hand-feel",
			"Straight-cut kurti with elongating vertical stripe pattern",
			"Wide-leg palazzo with comfortable elasticated waistband",
			"Contemporary V-neck design with tailored 3/4 sleeves",
			"Machine wash safe with colorfast dyes"
		],
		stylingTip: "Style with oxidised silver jhumkas, stacked bangles, and flat neutral kolhapuris.",
		amazonUrl: "https://www.amazon.in/dp/B0HCP31NKH/?coliid=IY4Z1GF5P2SGX&colid=1CV34JZKMXFDG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
		youtubeVideoUrl: "https://www.youtube.com/@trendy-jd"
	},
	{
		id: "meera-fab-anarkali-palazzo-set",
		code: "TF03",
		title: "MEERA FAB Cotton Printed Blue Anarkali Kurta with Palazzo & Dupatta",
		badge: "Festive Bestseller",
		category: "Anarkali Sets",
		priceRange: "₹729",
		rating: 4.7,
		reviewCount: 2950,
		image: "/products/tf03.png?v=clean",
		shortDesc: "Classic indigo-blue flared Anarkali kurta complete with matching printed palazzo and featherlight Mulmul dupatta.",
		description: "One of our most requested try-ons from our Festive Budget Edit. Pure cotton Anarkali flare that drapes fluidly, finished with delicate Mulmul dupatta.",
		highlights: [
			"Complete 3-piece festive set: Anarkali Kurta, Palazzo & Dupatta",
			"Kurta & Palazzo fabric: 100% Pure Cotton",
			"Dupatta fabric: Ultra-soft, breathable Mulmul",
			"Flattering tiered Anarkali flare with round neckline",
			"Gentle hand wash recommended"
		],
		stylingTip: "Add silver oxidised earrings and mirror-work juttis to complement the indigo floral print.",
		amazonUrl: "https://www.amazon.in/dp/B0BTX2DWV1/?coliid=I30CA0BM260XWX&colid=1CV34JZKMXFDG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
		youtubeVideoUrl: "https://www.youtube.com/@trendy-jd"
	},
	{
		id: "klosia-printed-anarkali-maroon",
		code: "TF04",
		title: "KLOSIA Rayon Printed Anarkali Kurta and Pant with Dupatta Set (Maroon)",
		badge: "Editor's Pick",
		category: "Anarkali Sets",
		priceRange: "₹668",
		rating: 4.8,
		reviewCount: 4120,
		image: "/products/tf04.png?v=clean",
		shortDesc: "Crimson-maroon viscose Anarkali suit set with gold geometric print accents, cigarette pants, and printed dupatta.",
		description: "Featured in our Wedding Guest Lookbook Under ₹1000. Rich maroon tone paired with traditional motifs that gives a boutique designer look at high-street pricing.",
		highlights: [
			"Luxurious high-density viscose rayon material",
			"Flared Anarkali silhouette with sleek V-neckline",
			"Includes tailored cigarette pants and coordinating printed dupatta",
			"Fade-resistant golden print detailing",
			"Available in sizes S up to 5XL"
		],
		stylingTip: "Accentuate the deep maroon tone with antique kundan jewelry and metallic block heels for evening events.",
		amazonUrl: "https://www.amazon.in/dp/B0FRFW2S81/?coliid=IYZ349XAC6U3J&colid=1CV34JZKMXFDG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
		youtubeVideoUrl: "https://www.youtube.com/@trendy-jd"
	},
	{
		id: "klosia-printed-anarkali-teal",
		code: "TF05",
		title: "KLOSIA Rayon Printed Anarkali Kurta and Pant with Dupatta Set (Teal Blue)",
		badge: "Viral Look",
		category: "Anarkali Sets",
		priceRange: "₹688",
		rating: 4.8,
		reviewCount: 3870,
		image: "/products/tf05.png?v=clean",
		shortDesc: "Vibrant teal blue viscose flared Anarkali set with gold foil border detailing, straight trousers, and Chanderi dupatta.",
		description: "The viral hit from our Diwali Lookbook. Radiant teal blue shade with golden foil trim on lightweight viscose that stays comfortable through long celebrations.",
		highlights: [
			"Vibrant teal blue shade with delicate gold foil prints",
			"3-piece ensemble: Anarkali Kurta, straight-fit trousers & Chanderi dupatta",
			"Comfortable V-neckline with decorative yoke border",
			"Featherlight construction suitable for long wedding functions",
			"Flattering silhouette from waist to calf with generous flare"
		],
		stylingTip: "Pair with pearl and polki earrings, nude lip, and an embroidered potli for festive occasions.",
		amazonUrl: "https://www.amazon.in/dp/B0FDVDYRBC/?coliid=I35XYZ9LJU5G03&colid=1CV34JZKMXFDG&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
		youtubeVideoUrl: "https://www.youtube.com/@trendy-jd"
	}
];

export function getProductById(id: string | undefined): Product | undefined {
	if (!id) return undefined;
	const lower: string = id.toLowerCase();
	return PRODUCTS.find(
		(p: Product): boolean => p.id === id || p.code.toLowerCase() === lower
	);
}

export function getProductByCode(code: string | undefined): Product | undefined {
	if (!code) return undefined;
	const target: string = code.trim().toLowerCase();
	return PRODUCTS.find(
		(p: Product): boolean => p.code.toLowerCase() === target
	);
}
