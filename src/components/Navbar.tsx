import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import YouTubeIcon from "./YouTubeIcon";
import { CHANNEL_INFO } from "../data/products";

export default function Navbar(): JSX.Element {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100/80 shadow-xs">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Editorial Brand Masthead */}
					<Link to="/" className="flex flex-col group py-1">
						<span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-rose-700 transition-colors">
							TRENDY <span className="text-rose-600">FASHION</span>
						</span>
						<div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium">
							<span>Curated by JD</span>
							<span className="inline-block w-1 h-1 rounded-full bg-rose-400" />
							<span className="text-stone-400">{CHANNEL_INFO.handle}</span>
						</div>
					</Link>

					{/* Desktop Navigation Links */}
					<nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
						<Link
							to="/"
							className="text-stone-600 hover:text-rose-600 transition-colors"
						>
							Home
						</Link>
						<Link
							to="/shop"
							className="text-stone-600 hover:text-rose-600 transition-colors"
						>
							The Collection
						</Link>
						<a
							href={CHANNEL_INFO.youtubeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs tracking-wider uppercase font-medium px-4 py-2.5 rounded-full shadow-md shadow-rose-500/20 transition"
						>
							<YouTubeIcon className="w-3.5 h-3.5" />
							<span>YouTube</span>
							<span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded lowercase tracking-normal">
								{CHANNEL_INFO.stats.views}
							</span>
						</a>
					</nav>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden items-center gap-2">
						<a
							href={CHANNEL_INFO.youtubeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-rose-600 hover:text-rose-700"
							aria-label="YouTube Channel"
						>
							<YouTubeIcon className="w-5 h-5" />
						</a>
						<button
							type="button"
							onClick={(): void => setMobileMenuOpen(!mobileMenuOpen)}
							className="p-2 text-stone-700 hover:text-stone-900 rounded-lg focus:outline-none cursor-pointer"
							aria-label="Toggle navigation menu"
						>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden border-t border-rose-100 bg-white px-4 pt-4 pb-6">
					<div className="flex flex-col space-y-3 text-sm font-medium">
						<Link
							to="/"
							onClick={(): void => setMobileMenuOpen(false)}
							className="px-2 py-2 text-stone-800 hover:text-rose-600 transition rounded-lg hover:bg-rose-50/50"
						>
							Home
						</Link>
						<Link
							to="/shop"
							onClick={(): void => setMobileMenuOpen(false)}
							className="px-2 py-2 text-stone-800 hover:text-rose-600 transition rounded-lg hover:bg-rose-50/50"
						>
							The Collection & All Codes
						</Link>
						<a
							href={CHANNEL_INFO.youtubeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
						>
							<YouTubeIcon className="w-4 h-4" /> Watch @trendy-jd on YouTube ({CHANNEL_INFO.stats.views})
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
