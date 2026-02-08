import { Card } from '../common/Card';
import ProgressIcon from '../../assets/icons/progress.svg';
import CriteriaIcon from '../../assets/icons/criteria.svg';
import CompletedIcon from '../../assets/icons/progress.svg';
import DocumentsIcon from '../../assets/icons/progress.svg';
import EvidenceIcon from '../../assets/icons/progress.svg';
import UploadIcon from '../../assets/icons/progress.svg';

const stats = [
  { 
    label: 'Overall Progress', 
    value: '78.65%', 
    icon: ProgressIcon, 
  },
  { 
    label: 'Total Criteria', 
    value: '95', 
    icon: CriteriaIcon, 
  },
  { 
    label: 'Completed Criteria', 
    value: '52', 
    icon: CompletedIcon, 
  },
  { 
    label: 'Evidence Documents', 
    value: '386', 
    icon: DocumentsIcon, 
  },
  { 
    label: 'Evidence (Completed)', 
    value: '302', 
    icon: EvidenceIcon, 
  },
  { 
    label: 'Uploaded to DGA', 
    value: '258', 
    icon: UploadIcon, 
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => {
        return (
          <Card key={index}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
              <div>
                <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};