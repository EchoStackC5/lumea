import { Link, useLocation } from "react-router";

export default function DashboardTabs({ tabs }) {
  const location = useLocation();

  return (
    <div className="lg:hidden bg-purple-100 shadow-xs border-b border-light-border sticky top-[64px] z-40">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex-shrink-0 px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-system-primary text-white border-b-2 border-system-primary"
                  : "text-dashboar-secondary hover:text-system-primary bg-purple-100 hover:bg-backgrounds"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
