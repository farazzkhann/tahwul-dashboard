import { Card } from '../common/Card';
import { SemiCircleGauge } from '../common/SemiCircleGauge';

export const ComplianceScore = () => {
  return (
    <Card>
      <h3 className="text-base font-bold mb-8">Overall Compliance Score</h3>
      <div className='flex flex-col items-center'>
        <SemiCircleGauge percentage={65} size="lg" />
        <p className="text-sm text-gray-600 mt-4">Basic Standards 2025</p>
      </div>
    </Card>
  );
};