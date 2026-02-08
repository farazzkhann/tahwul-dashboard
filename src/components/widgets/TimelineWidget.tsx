import { Card } from '../common/Card';
import { timelineEvents } from '../../data/mockData';

export const TimelineWidget = () => {

  const completedCount = timelineEvents.filter(e => e.status === 'completed').length;
  const completedWidth = ((completedCount - 1) / (timelineEvents.length - 1)) * 100;

  return (
    <Card className="bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-bold text-navy-900">Project Timeline</h2>
        <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white">
          <option>2026</option>
        </select>
      </div>


      <div className="relative py-4">

        <div className="absolute inset-0 top-6 h-4 bg-[#F5F8FB] rounded-full" />
        <div
          className="absolute top-6 h-4 bg-green-600 rounded-full transition-all duration-500"
          style={{ width: `${completedWidth}%` }}
        />


        <div className="flex justify-between relative h-full">
          {timelineEvents.map((event) => {
            const isCompleted = event.status === 'completed';

            return (
              <div key={event.id} className="flex flex-col items-center">

                <div className="h-8 flex items-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full shadow-sm ${isCompleted
                        ? 'bg-white'
                        : 'bg-red-500'
                      }`}
                  />
                </div>

                <div className="mt-2 text-center">
                  <div className="text-xs text-gray-500 mb-0.5 whitespace-nowrap">
                    {event.date}
                  </div>
                  <div className="text-sm font-medium text-gray-900 leading-tight whitespace-nowrap">
                    {event.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};