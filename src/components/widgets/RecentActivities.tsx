import { Card } from '../common/Card';
import { recentActivities } from '../../data/mockData';

export const RecentActivities = () => {
  return (
    <Card>
      <h2 className="text-base font-bold mb-4 border-b border-gray-200 pb-3">Recent Activities</h2>
      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex gap-3 border-b border-gray-200 pb-3">
            <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0" />
            <div className='flex items-start justify-between gap-6 w-full'>
              <p className="text-base text-navy-900 max-w-[80%]">{activity.description}</p>
              <p className="text-xs text-[#8597A8] w-fit mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};