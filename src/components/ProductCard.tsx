import { useState, type JSX, type MouseEvent } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import type { ProductCardProps } from "../types";

export default function ProductCard({ product }: ProductCardProps): JSX.Element {
	const [copied, setCopied] = useState<boolean>(false);

	const handleCopyCode = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		e.stopPropagation();
		navigator.clipboard.writeText(product.code);
		setCopied(true);
		setTimeout((): void => setCopied(false), 1600);
	};

	return (
		<article className="group bg-white rounded-2xl border border-rose-100/80 hover:border-rose-300 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(244,63,94,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
			<div>
				{/* Image Container with Direct Amazon Link */}
				<a
					href={product.amazonUrl}
					target="_blank"
					rel="nofollow sponsored noopener noreferrer"
					aria-label={`Shop ${product.title} on Amazon`}
					className="block relative aspect-[3/4] overflow-hidden bg-rose-50/40 cursor-pointer"
				>
					<img
						src={product.image}
						alt={product.title}
						loading="lazy"
						className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

					{/* Top Left: Editorial Tag / Badge */}
					<span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-rose-700 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs border border-rose-200/60">
						{product.badge}
					</span>

					{/* Top Right: One-Click Haul Code Pill */}
					<button
						type="button"
						onClick={handleCopyCode}
						title="Click to copy haul code for YouTube description"
						aria-label={`Copy code ${product.code}`}
						className="absolute top-3 right-3 bg-rose-700/90 hover:bg-rose-800 backdrop-blur-md text-white text-[11px] font-mono font-medium px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5 transition cursor-pointer z-10"
					>
						<span>#{product.code}</span>
						{copied ? (
							<Check className="w-3 h-3 text-emerald-300 shrink-0" />
						) : (
							<Copy className="w-3 h-3 text-rose-200 shrink-0" />
						)}
					</button>

					{/* Bottom Left: Category Label */}
					<div className="absolute bottom-3 left-3 pointer-events-none">
						<span className="bg-stone-900/80 backdrop-blur-md text-rose-200 text-[10px] tracking-wider uppercase px-2 py-0.5 rounded font-medium">
							{product.category}
						</span>
					</div>

					{/* Hover Quick Action Cue */}
					<div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-end pointer-events-none">
						<span className="bg-white text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
							<span>Amazon</span>
							<ArrowUpRight className="w-3.5 h-3.5 text-rose-600" />
						</span>
					</div>
				</a>

				{/* Card Body */}
				<div className="p-5 flex flex-col gap-2.5">
					<div className="flex items-baseline justify-between">
						<span className="text-[11px] uppercase tracking-wider font-semibold text-rose-500">
							{product.category}
						</span>
						<span className="text-base sm:text-lg font-bold text-stone-900 font-serif">
							{product.priceRange}
						</span>
					</div>

					{/* Product Title as Direct Amazon Link */}
					<a
						href={product.amazonUrl}
						target="_blank"
						rel="nofollow sponsored noopener noreferrer"
						className="block group/link"
					>
						<h3 className="text-sm sm:text-base font-serif font-bold text-stone-900 group-hover/link:text-rose-600 transition-colors line-clamp-2 leading-snug">
							{product.title}
						</h3>
					</a>
				</div>
			</div>

			{/* Direct Amazon CTA Button */}
			<div className="px-5 pb-5 pt-1">
				<a
					href={product.amazonUrl}
					target="_blank"
					rel="nofollow sponsored noopener noreferrer"
					className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 active:scale-[0.99] text-white font-medium py-3 px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-rose-500/15"
				>
					<span>Shop on Amazon</span>
					<ArrowUpRight className="w-4 h-4 text-rose-200" />
				</a>
			</div>
		</article>
	);
}
