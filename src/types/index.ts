// src/types/index.ts

export type ProductCategory =
	| "All"
	| "Ethnic Wear"
	| "Co-Ord Sets"
	| "Anarkali Sets"
	| "Straight Kurti Sets";

export type SortOption = "featured" | "rating" | "code" | "title";

export interface Product {
	id: string;
	code: string;
	title: string;
	badge: string;
	category: ProductCategory;
	priceRange: string;
	rating: number;
	reviewCount: number;
	image: string;
	shortDesc: string;
	description: string;
	highlights: string[];
	stylingTip: string;
	amazonUrl: string;
	youtubeVideoUrl: string;
}

export interface ChannelStats {
	views: string;
	videos: string;
	subscribers: string;
	location: string;
	joined: string;
}

export interface ChannelInfo {
	name: string;
	handle: string;
	tagline: string;
	subTagline: string;
	youtubeUrl: string;
	stats: ChannelStats;
	description: string;
	disclosureText: string;
}

export interface ProductCardProps {
	product: Product;
}

export interface YouTubeIconProps {
	className?: string;
}
