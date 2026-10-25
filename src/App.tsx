import { useEffect, type JSX } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, type Location } from "react-router-dom";
import DisclosureBanner from "./components/DisclosureBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ShortCodeRedirect from "./pages/ShortCodeRedirect";

// Scroll to top on route change
function ScrollToTop(): null {
	const { pathname }: Location = useLocation();

	useEffect((): void => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default function App(): JSX.Element {
	const basename: string = import.meta.env.BASE_URL;

	return (
		<Router basename={basename}>
			<ScrollToTop />
			<div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 antialiased selection:bg-stone-900 selection:text-white">
				{/* Refined Amazon Associates Legal Disclosure */}
				<DisclosureBanner />

				{/* High-Fashion Editorial Navbar */}
				<Navbar />

				{/* Main Route Content */}
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/p/:code" element={<ShortCodeRedirect />} />
						<Route path="*" element={<HomePage />} />
					</Routes>
				</main>

				{/* Editorial Minimalist Footer */}
				<Footer />
			</div>
		</Router>
	);
}
