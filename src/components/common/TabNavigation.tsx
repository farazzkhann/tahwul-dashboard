interface Tab {
    id: string;
    label: string;
  }
  
  interface TabNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabId: string) => void;
  }
  
  export const TabNavigation = ({ tabs, activeTab, onChange }: TabNavigationProps) => {
    return (
      <div className="bg-gray-200 rounded-[8px] w-fit p-1">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`px-6 py-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-navy-900 bg-white rounded-[8px]'
                  : 'border-transparent text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    );
  };