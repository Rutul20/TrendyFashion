import { useEffect, type JSX } from "react";
import { useParams, useNavigate, Link, type NavigateFunction } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getProductByCode } from "../data/products";
import type { Product } from "../types";

export default function ShortCodeRedirect(): JSX.Element {
	const { code } = useParams<{ code: string }>();
	const navigate: NavigateFunction = useNavigate();
	const targetCode: string = (code || "").trim().toUpperCase();
	const product: Product | undefined = getProductByCode(targetCode);

	useEffect((): (() => void) => {
		const timer: ReturnType<typeof setTimeout> = setTimeout((): void => {
			if (product && product.amazonUrl) {
				// Redirect directly to the Amazon product page with affiliate tracking
				window.location.replace(product.amazonUrl);
			} else {
				// If code is not found, fallback to the shop catalog with search pre-filled
				navigate(`/shop?search=${encodeURIComponent(targetCode)}`, { replace: true });
			}
		}, 250);

		return (): void => clearTimeout(timer);
	}, [product, targetCode, navigate]);

	return (
		<div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
			<div className="bg-white rounded-2xl border border-rose-200/80 shadow-xl shadow-rose-500/5 p-8 sm:p-12 text-center max-w-md w-full">
				<div className="w-12 h-12 bg-gradient-to-tr from-rose-600 to-pink-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-rose-500/20">
					<ArrowUpRight className="w-6 h-6 animate-pulse" />
				</div>
				<span className="text-[10px] font-bold tracking-widest uppercase text-rose-600">
					YouTube Haul Shortlink
				</span>
				<h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1 mb-2">
					Redirecting to Amazon
				</h2>
				<p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
					Looking up code <code className="bg-rose-50 border border-rose-200 text-rose-700 font-mono font-bold px-2 py-0.5 rounded text-xs">#{targetCode}</code> featured on Trendy Fashion (@trendy-jd).
				</p>

				{product ? (
					<div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 text-left text-xs mb-6">
						<p className="font-semibold text-stone-900 line-clamp-1">{product.title}</p>
						<p className="text-rose-600 text-[11px] mt-0.5 font-medium">{product.priceRange} · {product.category}</p>
					</div>
				) : null}

				<div className="space-y-3">
					{product ? (
						<a
							href={product.amazonUrl}
							target="_blank"
							rel="nofollow sponsored noopener noreferrer"
							className="block w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-semibold py-3 px-4 rounded-xl transition shadow-md shadow-rose-500/15"
						>
							Click here if not redirected automatically
						</a>
					) : null}
					<Link
						to="/shop"
						className="block text-xs text-stone-500 hover:text-rose-600 underline pt-1"
					>
						Or browse all catalog pieces
					</Link>
				</div>
			</div>
		</div>
	);
}
