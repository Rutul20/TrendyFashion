import type { JSX } from "react";
import { Link } from "react-router-dom";
import YouTubeIcon from "./YouTubeIcon";
import { CHANNEL_INFO } from "../data/products";

export default function Footer(): JSX.Element {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-24 pt-16 pb-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
					{/* Brand Column */}
					<div className="md:col-span-2 space-y-4">
						<div>
							<span className="text-xl font-bold text-white tracking-tight font-serif">
								TRENDY <span className="text-rose-500">FASHION</span>
							</span>
							<p className="text-xs text-rose-300/80 font-medium tracking-widest uppercase mt-0.5">
								Curated by JD • {CHANNEL_INFO.handle}
							</p>
						</div>
						<p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
							{CHANNEL_INFO.description}
						</p>
						<div className="pt-2">
							<a
								href={CHANNEL_INFO.youtubeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-xl transition shadow-md shadow-rose-500/20"
							>
								<YouTubeIcon className="w-4 h-4" />
								<span>Watch Channel ({CHANNEL_INFO.stats.views})</span>
							</a>
						</div>
					</div>

					{/* Navigation Links */}
					<div className="space-y-3">
						<h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200">
							The Collection
						</h4>
						<ul className="space-y-2 text-xs text-stone-400">
							<li>
								<Link to="/" className="hover:text-rose-400 transition-colors">
									Home & Lookbook
								</Link>
							</li>
							<li>
								<Link to="/shop" className="hover:text-rose-400 transition-colors">
									All Outfits & Codes
								</Link>
							</li>
							<li>
								<Link to="/shop?category=Anarkali%20Sets" className="hover:text-rose-400 transition-colors">
									Anarkali Sets
								</Link>
							</li>
							<li>
								<Link to="/shop?category=Co-Ord%20Sets" className="hover:text-rose-400 transition-colors">
									Cotton Co-Ord Sets
								</Link>
							</li>
							<li>
								<Link to="/shop?category=Straight%20Kurti%20Sets" className="hover:text-rose-400 transition-colors">
									Straight Kurti Sets
								</Link>
							</li>
						</ul>
					</div>

					{/* Haul Shortcode Directory */}
					<div className="space-y-3">
						<h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200">
							YouTube Haul Codes
						</h4>
						<p className="text-xs text-stone-400 leading-relaxed">
							In our video descriptions, every featured look has a haul code like <code className="bg-stone-800 text-rose-300 px-1.5 py-0.5 rounded font-mono text-[11px]">#TF01</code>. Type it in the search bar or use direct shortlinks like <code className="bg-stone-800 text-rose-300 px-1.5 py-0.5 rounded font-mono text-[11px]">/p/TF01</code> to jump directly to Amazon!
						</p>
					</div>
				</div>

				{/* Mandatory Amazon Associates Legal Disclosure */}
				<div className="mt-8 pt-6 space-y-4">
					<div className="bg-stone-800/40 p-4 rounded-xl border border-stone-800 text-xs text-stone-400 leading-relaxed">
						<p className="font-semibold text-rose-300/80 text-[11px] uppercase tracking-wider mb-1">
							Amazon Associates Disclosure:
						</p>
						<p className="text-[11px] text-stone-400">
							{CHANNEL_INFO.disclosureText}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-stone-500">
						<p>© {currentYear} Trendy Fashion (@trendy-jd). All rights reserved.</p>
						<p className="tracking-wide">
							Curated with care by JD for Trendy Fashion
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
