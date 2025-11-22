export function TabBar({ tabs, activeTab, onChange }) {
  return (
    <nav className="tabbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={
            tab.id === activeTab ? "tabbar-item tabbar-item-active" : "tabbar-item"
          }
          onClick={() => onChange(tab.id)}
        >
          <span className="tabbar-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
