import { Card } from '../common/Card';
import { SemiCircleGauge } from '../common/SemiCircleGauge';

export const AuditReadiness = () => {
  return (
    <Card>
      <h3 className="text-base font-bold mb-4">Audit Readiness</h3>
      <div className="flex justify-center mb-2">
        <SemiCircleGauge percentage={80} size="lg" />
      </div>
      <p className="text-center text-sm text-gray-600 mb-4">Readiness Level</p>
      
      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
        <div className="text-center">
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-600">Overdue Stds</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-600">Missing Evidence</p>
        </div>
      </div>
    </Card>
  );
};