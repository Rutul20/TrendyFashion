import { useState, type JSX } from "react";
import { Info } from "lucide-react";

export default function DisclosureBanner(): JSX.Element {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<aside
			aria-label="Affiliate Disclosure"
			className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-stone-300 text-[11px] py-2 px-4 border-b border-rose-900/50 transition-colors"
		>
			<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
				<div className="flex items-center gap-2">
					<span className="inline-flex items-center justify-center bg-rose-500/20 text-rose-400 p-0.5 rounded-full shrink-0">
						<Info className="w-3.5 h-3.5" />
					</span>
					<span className="leading-snug">
						<strong className="text-white font-medium">Amazon Affiliate Disclosure:</strong> As an Amazon Associate, Trendy Fashion earns from qualifying purchases at no additional cost to you.
					</span>
				</div>
				<button
					type="button"
					onClick={(): void => setExpanded(!expanded)}
					className="text-rose-400 hover:text-rose-300 underline cursor-pointer text-[11px] shrink-0 transition-colors"
				>
					{expanded ? "Less info" : "Details"}
				</button>
			</div>

			{expanded && (
				<div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-rose-900/50 text-[11px] text-stone-400 leading-relaxed">
					Trendy Fashion participates in the Amazon Associates Program. Links clicked on this site redirect to Amazon with affiliate tracking tags. When you complete a purchase, a small referral fee supports channel production without altering any Amazon pricing, deals, or return policies.
				</div>
			)}
		</aside>
	);
}
