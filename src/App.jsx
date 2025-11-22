import { useState } from "react";
import { TabBar } from "./components/TabBar";
import { ExternalPage } from "./components/ExternalPage";

const TABS = [
  {
    id: "heatmap",
    label: "Heatmap",
    title: "Crypto Market Heatmap",
    subtitle: "Live multi-coin heatmap from CoinGecko",
    // CoinGecko live crypto heatmap page
    url: "https://www.coingecko.com/en/cryptocurrency-heatmap",
    source: "CoinGecko",
  },
  {
    id: "liqmap",
    label: "BTC Liq Map",
    title: "BTC Liquidation Map",
    subtitle: "BTCUSDT futures liquidation map (Binance) from CoinGlass",
    // CoinGlass BTC/USDT liquidation map
    url: "https://www.coinglass.com/pro/futures/LiquidationMap",
    source: "CoinGlass",
  },
  {
    id: "liqheat",
    label: "BTC Liq Heat",
    title: "BTC Liquidation Heatmap",
    subtitle: "BTCUSDT liquidation heatmap from CoinGlass",
    // CoinGlass BTC/USDT liquidation heatmap
    url: "https://www.coinglass.com/pro/futures/LiquidationHeatMap",
    source: "CoinGlass",
  },
  {
    id: "spotflows",
    label: "BTC Spot",
    title: "BTC Spot Flows",
    subtitle: "Bitcoin spot inflow / outflow from CoinGlass",
    // CoinGlass BTC spot page (includes spot flows)
    url: "https://www.coinglass.com/currencies/BTC?type=spot",
    source: "CoinGlass",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("heatmap");

  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-header-title">Crypto Liquidation Dashboard</div>
        <div className="app-header-subtitle">
          {currentTab.title}
        </div>
      </header>

      <main className="app-main">
        <ExternalPage
          key={currentTab.id}
          title={currentTab.title}
          subtitle={currentTab.subtitle}
          url={currentTab.url}
          source={currentTab.source}
        />
      </main>

      <TabBar
        tabs={TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    </div>
  );
}
