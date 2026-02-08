import { TimelineWidget } from '../../components/widgets/TimelineWidget';
import { StatsCards } from '../../components/widgets/StatsCards';
import { PerspectivesGrid } from '../../components/widgets/PerspectivesGrid';
import { PerformanceChart } from '../../components/charts/PerformanceChart';
import { ComplianceScore } from '../../components/widgets/ComplianceScore';
import { TopPerformers } from '../../components/widgets/TopPerformers';
import { RecentActivities } from '../../components/widgets/RecentActivities';
import { AuditReadiness } from '../../components/widgets/AuditReadiness';

export const Dashboard = () => {
    return (
        <div className="space-y-6">
            <TimelineWidget />
            <StatsCards />
            <PerspectivesGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ComplianceScore />
                <TopPerformers />
                <RecentActivities />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <PerformanceChart />
                </div>
                <AuditReadiness />
            </div>
        </div>
    );
};