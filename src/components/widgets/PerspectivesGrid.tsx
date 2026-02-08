import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { perspectives } from '../../data/mockData';

export const PerspectivesGrid = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-accent';
      case 'in-progress': return 'bg-yellow-accent';
      case 'not-started': return 'bg-gray-accent';
      case 'delayed': return 'bg-red-accent';
      case 'partially-uploaded': return 'bg-dark-blue-accent';
      case 'fully-uploaded': return 'bg-red-accent';
      default: return 'bg-gray-400';
    }
  };

  return (
    <Card className="bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-base font-bold text-navy-900">Progress Status</h2>

        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-accent rounded-full" />
            <span className="text-navy-900">Not Started</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-accent rounded-full" />
            <span className="text-navy-900">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-accent rounded-full" />
            <span className="text-navy-900">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-dark-blue-accent rounded-full" />
            <span className="text-navy-900 hidden sm:inline">Partially Uploaded</span>
            <span className="text-navy-900 sm:hidden">Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-accent rounded-full" />
            <span className="text-navy-900 hidden sm:inline">Fully Uploaded</span>
            <span className="text-navy-900 sm:hidden">Fully</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-accent rounded-full" />
            <span className="text-navy-900">Delayed</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4 min-w-max sm:min-w-0">
          {perspectives.map((perspective) => (
            <Link
              key={perspective.id}
              to={`/perspective/${perspective.id}`}
              className="block transition-transform"
            >
              <div className="cursor-pointer">
                <div className="bg-navy-900 text-white rounded-xl p-4 text-center mb-3 min-h-[90px] flex flex-col justify-center hover:bg-navy-800 transition-colors">
                  <h3 className="text-sm font-bold leading-tight mb-3 flex items-center justify-center">
                    {perspective.name}
                  </h3>
                  <div className="text-base font-bold bg-white/10 p-1 rounded-full">
                    {perspective.progress}%
                  </div>
                </div>

                <div className="space-y-3">
                  {perspective.subItems && perspective.subItems.length > 0 && (
                    <div className="space-y-3">
                      {perspective.subItems.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="bg-gray-300 rounded-xl p-3 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="text-xs text-navy-900 mb-4 text-center font-medium leading-tight">
                            {subItem.name}
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-center">
                            {subItem.indicators?.map((indicator, idx) => (
                              <div
                                key={idx}
                                className={`
                                  w-7 h-7 
                                  rounded-full 
                                  flex items-center justify-center 
                                  text-base text-white
                                  ${getStatusColor(indicator.status)}
                                `}
                              >
                                {indicator.number}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};