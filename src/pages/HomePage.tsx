import { useState, type JSX, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate, type NavigateFunction } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import YouTubeIcon from "../components/YouTubeIcon";
import { CHANNEL_INFO, PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";
import type { Product, ProductCategory } from "../types";

export default function HomePage(): JSX.Element {
	const [inputCode, setInputCode] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");
	const navigate: NavigateFunction = useNavigate();

	const handleCodeSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const trimmed: string = inputCode.trim().toUpperCase();
		if (trimmed) {
			navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
		}
	};

	const filteredProducts: Product[] = PRODUCTS.filter((product: Product): boolean => {
		if (selectedCategory === "All") return true;
		if (selectedCategory === "Ethnic Wear") {
			return (
				product.category === "Co-Ord Sets" ||
				product.category === "Anarkali Sets" ||
				product.category === "Straight Kurti Sets"
			);
		}
		return product.category === selectedCategory;
	});

	return (
		<div className="space-y-20 sm:space-y-28">
			{/* EDITORIAL HERO SECTION with Warm Color */}
			<section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-rose-50/80 via-amber-50/30 to-[#FAF8F5]">
				{/* Decorative ambient circles */}
				<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute top-40 right-0 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-10 w-60 h-60 bg-pink-200/15 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					{/* Channel badge */}
					<div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-rose-200/70 px-4 py-1.5 rounded-full shadow-xs mb-6">
						<span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
						<span className="text-[11px] font-bold tracking-widest uppercase text-rose-700">
							YouTube {CHANNEL_INFO.handle} • The Wardrobe Edit
						</span>
					</div>

					{/* Editorial Headline */}
					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-stone-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
						Style that <span className="text-rose-600">speaks.</span>
					</h1>

					<p className="mt-4 text-lg sm:text-2xl text-rose-600/80 font-serif italic max-w-2xl mx-auto">
						Curated looks from YouTube, linked directly to Amazon.
					</p>

					<p className="mt-5 text-xs sm:text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
						Discover the festive Anarkali sets, breathable cotton co-ords, and everyday ethnic styles featured in recent lookbooks by JD. Tap any outfit to open the verified Amazon listing.
					</p>

					{/* Quick Haul Code Finder */}
					<div className="mt-10 max-w-lg mx-auto">
						<form
							onSubmit={handleCodeSubmit}
							className="relative flex items-center bg-white border border-rose-200/80 rounded-full p-1.5 focus-within:border-rose-400 focus-within:shadow-lg focus-within:shadow-rose-500/5 transition-all shadow-md"
						>
							<div className="relative flex-1">
								<Search className="w-4 h-4 text-rose-400 absolute left-4 top-1/2 -translate-y-1/2" />
								<input
									type="text"
									placeholder="Have a video code? Enter #TF01, TF02..."
									value={inputCode}
									onChange={(e: ChangeEvent<HTMLInputElement>): void => setInputCode(e.target.value)}
									className="w-full pl-11 pr-3 py-2.5 text-xs sm:text-sm bg-transparent rounded-full focus:outline-none text-stone-900 placeholder:text-stone-400 font-medium"
								/>
							</div>
							<button
								type="submit"
								className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm"
							>
								<span>Find Outfit</span>
								<ArrowRight className="w-3.5 h-3.5" />
							</button>
						</form>
					</div>

					{/* Channel Stats Bar */}
					<div className="mt-12 pt-8 border-t border-rose-100/80 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
						<div>
							<p className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
								{CHANNEL_INFO.stats.views}
							</p>
							<p className="text-[10px] tracking-widest uppercase text-rose-500 font-semibold mt-0.5">
								Channel Views
							</p>
						</div>
						<div className="hidden sm:block w-px h-8 bg-rose-200" />
						<div>
							<p className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
								{CHANNEL_INFO.stats.videos}
							</p>
							<p className="text-[10px] tracking-widest uppercase text-rose-500 font-semibold mt-0.5">
								Fashion Lookbooks
							</p>
						</div>
						<div className="hidden sm:block w-px h-8 bg-rose-200" />
						<div>
							<p className="text-xl sm:text-2xl font-serif font-bold text-rose-600">
								Direct Link
							</p>
							<p className="text-[10px] tracking-widest uppercase text-rose-500 font-semibold mt-0.5">
								To Amazon Deals
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CURATED COLLECTION & CATEGORY SELECTOR */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-rose-100">
					<div>
						<span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-600">
							The Curated Edit
						</span>
						<h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
							Featured Lookbook Outfits
						</h2>
						<p className="text-xs sm:text-sm text-stone-500 mt-1">
							Click any piece to jump straight to the verified Amazon listing.
						</p>
					</div>

					{/* Category Tabs */}
					<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
						{CATEGORIES.map((cat: ProductCategory): JSX.Element => {
							const isActive: boolean = selectedCategory === cat;
							return (
								<button
									key={cat}
									type="button"
									onClick={(): void => setSelectedCategory(cat)}
									className={`text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
										isActive
											? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-500/20"
											: "bg-white text-stone-600 hover:text-rose-600 border border-rose-100 hover:border-rose-300"
									}`}
								>
									{cat}
								</button>
							);
						})}
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProducts.map((product: Product): JSX.Element => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* Link to Full Catalog */}
				<div className="mt-12 text-center">
					<Link
						to="/shop"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-rose-500/15"
					>
						<span>Explore All Outfits & Codes</span>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>

			{/* EDITORIAL WORKFLOW: HOW TO SHOP YOUTUBE HAULS */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 sm:p-14 text-white">
					<div className="max-w-2xl mb-12">
						<span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-400">
							Effortless Wardrobe Shopping
						</span>
						<h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
							How to shop using #TF codes from YouTube
						</h3>
						<p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
							No more endless scrolling or broken links in YouTube comments. Every look has its own code for instant redirect.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
						<div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-rose-500/20">
								1
							</div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1.5">
								Watch the Try-On
							</h4>
							<p className="text-xs text-stone-400 leading-relaxed">
								See the fabric movement, fit, and styling advice in our video on YouTube (@trendy-jd).
							</p>
						</div>

						<div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-rose-500/20">
								2
							</div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1.5">
								Note the #TF Code
							</h4>
							<p className="text-xs text-stone-400 leading-relaxed">
								Find the code like <code className="bg-stone-700 text-rose-300 px-1 py-0.5 rounded font-mono font-semibold">#TF01</code> in the description or on-screen.
							</p>
						</div>

						<div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-rose-500/20">
								3
							</div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1.5">
								Direct Amazon Redirect
							</h4>
							<p className="text-xs text-stone-400 leading-relaxed">
								Click the piece here or enter the code to land directly on Amazon with the verified pricing and sizes.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* YOUTUBE CREATOR CALLOUT */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-rose-500/15">
					<div className="space-y-3 max-w-xl text-center md:text-left">
						<span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
							Join the JD Fashion Circle
						</span>
						<h3 className="text-2xl sm:text-4xl font-serif font-bold">
							Watch the latest try-on lookbooks
						</h3>
						<p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
							Join over {CHANNEL_INFO.stats.views} viewers on YouTube for weekly budget ethnic finds, festive styling guides, and honest fit reviews.
						</p>
					</div>

					<a
						href={CHANNEL_INFO.youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2.5 bg-white hover:bg-stone-50 text-rose-600 font-bold px-7 py-4 rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition shadow-lg transform hover:scale-105 shrink-0"
					>
						<YouTubeIcon className="w-4 h-4 text-red-600" />
						<span>Subscribe @trendy-jd</span>
					</a>
				</div>
			</section>
		</div>
	);
}
