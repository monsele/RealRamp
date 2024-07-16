import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FullExplore from "./pages/FullExplore";
import InvestorOverview from "./pages/InvestorOverview";
import PublishProperty from "./pages/PublishProperty";
import AuctionScreen from "./pages/AuctionScreen";
import BidScreen from "./pages/BidPage";
import OnchainProviders from "./OnchainProviders";
import SaleFormForm from "./components/saleFrom";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <OnchainProviders>
      <Routes>
        <Route path="/" element={<FullExplore />} />
        <Route path="/over" element={<InvestorOverview />} />
        <Route path="/publish" element={<PublishProperty />} />
        <Route path="/auction" element={<AuctionScreen />} />
        <Route path="/bid" element={<BidScreen />} />
        <Route path="/sale" element={<SaleFormForm />} />
      </Routes>
    </OnchainProviders>
  );
}
export default App;
