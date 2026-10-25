import type { JSX, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X, SlidersHorizontal, ChevronDown, ShoppingBag } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";
import type { Product, ProductCategory, SortOption } from "../types";

export default function ShopPage(): JSX.Element {
	const [searchParams, setSearchParams] = useSearchParams();

	const selectedCategory: ProductCategory = (searchParams.get("category") as ProductCategory) || "All";
	const searchQuery: string = searchParams.get("search") || "";
	const sortBy: SortOption = (searchParams.get("sort") as SortOption) || "featured";

	const updateFilters = (newCat: ProductCategory, newSearch: string, newSort: SortOption): void => {
		const params: Record<string, string> = {};
		if (newCat && newCat !== "All") params.category = newCat;
		if (newSearch && newSearch.trim() !== "") params.search = newSearch.trim();
		if (newSort && newSort !== "featured") params.sort = newSort;
		setSearchParams(params);
	};

	const handleCategoryChange = (cat: ProductCategory): void => {
		updateFilters(cat, searchQuery, sortBy);
	};

	const handleSearchChange = (val: string): void => {
		updateFilters(selectedCategory, val, sortBy);
	};

	const handleSortChange = (val: SortOption): void => {
		updateFilters(selectedCategory, searchQuery, val);
	};

	const handleReset = (): void => {
		setSearchParams({});
	};

	const query: string = searchQuery.trim().toLowerCase();

	const filteredProducts: Product[] = PRODUCTS.filter((product: Product): boolean => {
		const matchesCategory: boolean =
			selectedCategory === "All" ||
			product.category === selectedCategory ||
			(selectedCategory === "Ethnic Wear" &&
				(product.category === "Co-Ord Sets" ||
					product.category === "Anarkali Sets" ||
					product.category === "Straight Kurti Sets"));

		const matchesSearch: boolean =
			!query ||
			product.code.toLowerCase().includes(query) ||
			product.title.toLowerCase().includes(query) ||
			product.shortDesc.toLowerCase().includes(query) ||
			product.category.toLowerCase().includes(query) ||
			product.stylingTip.toLowerCase().includes(query);

		return matchesCategory && matchesSearch;
	});

	if (sortBy === "rating") {
		filteredProducts.sort((a: Product, b: Product): number => b.rating - a.rating);
	} else if (sortBy === "code") {
		filteredProducts.sort((a: Product, b: Product): number => a.code.localeCompare(b.code));
	} else if (sortBy === "title") {
		filteredProducts.sort((a: Product, b: Product): number => a.title.localeCompare(b.title));
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
			{/* Catalog Header with Warm Color */}
			<div className="bg-gradient-to-r from-rose-50/80 via-pink-50/40 to-amber-50/50 rounded-3xl p-6 sm:p-10 border border-rose-200/60 mb-10 shadow-xs">
				<div className="max-w-3xl">
					<span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-600 bg-white/80 px-3 py-1 rounded-full border border-rose-200">
						YouTube Channel Haul Catalog
					</span>
					<h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 mt-3 mb-3">
						The Collection
					</h1>
					<p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
						Filter by category or enter a <strong className="text-rose-700 font-semibold">#TF haul code</strong> (e.g. <em>TF01</em>, <em>TF02</em>) from our YouTube video descriptions. Every piece links directly to the verified Amazon listing.
					</p>
				</div>

				{/* Search & Sort Controls */}
				<div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
					<div className="md:col-span-8 relative">
						<Search className="w-4 h-4 text-rose-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
						<input
							type="text"
							placeholder="Search by #TF code, outfit name, or style..."
							value={searchQuery}
							onChange={(e: ChangeEvent<HTMLInputElement>): void => handleSearchChange(e.target.value)}
							className="w-full pl-11 pr-10 py-3 bg-white rounded-2xl border border-rose-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition text-stone-900 placeholder:text-stone-400 font-medium shadow-xs"
						/>
						{searchQuery && (
							<button
								type="button"
								onClick={(): void => handleSearchChange("")}
								className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
								aria-label="Clear search input"
							>
								<X className="w-4 h-4" />
							</button>
						)}
					</div>

					<div className="md:col-span-4 relative">
						<div className="relative w-full">
							<SlidersHorizontal className="w-4 h-4 text-rose-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
							<select
								value={sortBy}
								onChange={(e: ChangeEvent<HTMLSelectElement>): void => handleSortChange(e.target.value as SortOption)}
								className="w-full appearance-none bg-white border border-rose-200 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition cursor-pointer shadow-xs"
							>
								<option value="featured">Sort: Featured</option>
								<option value="rating">Sort: Highest Rated</option>
								<option value="code">Sort: Code (#TF01 - #TF05)</option>
								<option value="title">Sort: Name (A-Z)</option>
							</select>
							<ChevronDown className="w-4 h-4 text-rose-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
						</div>
					</div>
				</div>

				{/* Category Pills Bar */}
				<div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
					{CATEGORIES.map((cat: ProductCategory): JSX.Element => {
						const isActive: boolean = selectedCategory === cat;
						return (
							<button
								key={cat}
								type="button"
								onClick={(): void => handleCategoryChange(cat)}
								className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
									isActive
										? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-500/20"
										: "bg-white/80 hover:bg-white text-stone-600 hover:text-rose-600 border border-rose-100 hover:border-rose-300 shadow-2xs"
								}`}
							>
								{cat}
							</button>
						);
					})}
				</div>
			</div>

			{/* Results Summary Bar */}
			<div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
				<div>
					Showing <span className="font-semibold text-stone-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "piece" : "pieces"}
					{selectedCategory !== "All" && (
						<span> in <strong className="text-rose-600 font-semibold">{selectedCategory}</strong></span>
					)}
					{searchQuery && (
						<span> matching "<strong className="text-stone-900">{searchQuery}</strong>"</span>
					)}
				</div>
				{(selectedCategory !== "All" || searchQuery || sortBy !== "featured") && (
					<button
						type="button"
						onClick={handleReset}
						className="text-rose-600 hover:text-rose-700 font-semibold underline cursor-pointer"
					>
						Reset filters
					</button>
				)}
			</div>

			{/* Products Grid */}
			{filteredProducts.length === 0 ? (
				<div className="bg-white rounded-3xl border border-rose-100 p-12 text-center max-w-md mx-auto my-12 shadow-sm">
					<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mx-auto mb-4">
						<ShoppingBag className="w-7 h-7" />
					</div>
					<h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
						No Outfits Found
					</h3>
					<p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
						We couldn't find an outfit matching "{searchQuery}". Try searching for another haul code like <code className="bg-rose-50 px-1.5 py-0.5 rounded font-mono text-rose-700 font-semibold">TF01</code> or reset filters.
					</p>
					<button
						type="button"
						onClick={handleReset}
						className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition cursor-pointer shadow-md"
					>
						Reset All Filters
					</button>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProducts.map((product: Product): JSX.Element => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	);
}
