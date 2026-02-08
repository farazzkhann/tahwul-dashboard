import { Card } from '../common/Card';
import { topLeaders } from '../../data/mockData';

export const TopPerformers = () => {
  return (
    <Card>
      <h2 className="text-base font-bold mb-4">Top Performing Perspective Leaders</h2>
      <div className="space-y-4">
        {topLeaders.map((leader) => (
          <div key={leader.id} className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-3">
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-base text-navy-900">{leader.name}</p>
                <p className="text-base text-gray-600">{leader.role}</p>
              </div>
            </div>
            <div className="text-lg font-bold text-navy-900">{leader.performance}%</div>
          </div>
        ))}
      </div>
    </Card>
  );
};