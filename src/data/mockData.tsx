import type { TimelineEvent, Perspective, Evidence, Activity, Leader } from '../types';
import AhmedAvatar from '../assets/images/leader-1.png';
import SarahAvatar from '../assets/images/leader-2.png';
import MohammadAvatar from '../assets/images/leader-3.png';

export const timelineEvents: TimelineEvent[] = [
  { id: '1', date: 'Mar 17', title: 'Kickoff Workshop', status: 'completed' },
  { id: '2', date: 'March 18', title: 'Data Collection', status: 'completed' },
  { id: '3', date: 'May 8', title: 'Initial Phase', status: 'upcoming' },
  { id: '4', date: 'May 9-July 12', title: 'Verification', status: 'upcoming' },
  { id: '5', date: 'July 13', title: 'Completion Reviews', status: 'upcoming' },
  { id: '6', date: 'August 21', title: 'Cycle Conclusion', status: 'upcoming' },
];

export const perspectives: Perspective[] = [
  {
    id: '1',
    name: 'Strategy And Planning',
    progress: 97.78,
    status: 'in-progress',
    subItems: [
      { 
        id: '1-1', 
        name: 'Digital Transformation',
        status: 'completed',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ]
      },
      { 
        id: '1-2', 
        name: 'Digital Governance',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in-progress' },
        ]
      },
      { 
        id: '1-3', 
        name: 'Enterprise Architecture',
        status: 'completed',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '2',
    name: 'Organization And Culture',
    progress: 70.83,
    status: 'in-progress',
    subItems: [
      { 
        id: '2-1', 
        name: 'Digital Culture And Environment',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ]
      },
      { 
        id: '2-2', 
        name: 'Leadership Development',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
        ]
      },
      { 
        id: '2-3', 
        name: 'Skills & Capacity Building',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'in-progress' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
        ]
      },
    ],
  },
  {
    id: '3',
    name: 'Operations And Execution',
    progress: 80.00,
    status: 'in-progress',
    subItems: [
      { 
        id: '3-1', 
        name: 'Business Processes',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '4',
    name: 'Business Continuity',
    progress: 90.59,
    status: 'in-progress',
    subItems: [
      { 
        id: '4-1', 
        name: 'Risk Management',
        status: 'completed',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
        ]
      },
      { 
        id: '4-2', 
        name: 'Business Continuity',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'not-started' },
          { number: 3, status: 'not-started' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'not-started' },
          { number: 7, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '5',
    name: 'Information Technology',
    progress: 75.00,
    status: 'in-progress',
    subItems: [
      { 
        id: '5-1', 
        name: 'Support Systems',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'in-progress' },
          { number: 5, status: 'completed' },
        ]
      },
      { 
        id: '5-2', 
        name: 'IT Infrastructure',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'fully-uploaded' },
          { number: 7, status: 'completed' },
        ]
      },
      { 
        id: '5-3', 
        name: 'Cloud Infrastructure',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in-progress' },
        ]
      },
    ],
  },
  {
    id: '6',
    name: 'Comprehensive Governance',
    progress: 64.44,
    status: 'in-progress',
    subItems: [
      { 
        id: '6-1', 
        name: 'Governance Platforms',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'not-started' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'completed' },
          { number: 7, status: 'completed' },
          { number: 8, status: 'completed' },
          { number: 9, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '7',
    name: 'Channels And Services',
    progress: 100,
    status: 'completed',
    subItems: [
      { 
        id: '7-1', 
        name: 'Service Quality',
        status: 'completed',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
        ]
      },
      { 
        id: '7-2', 
        name: 'Digital Channels',
        status: 'completed',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '8',
    name: 'Beneficiary Centralization',
    progress: 60.00,
    status: 'in-progress',
    subItems: [
      { 
        id: '8-1', 
        name: 'User Engagement',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'in-progress' },
        ]
      },
      { 
        id: '8-2', 
        name: 'User Relationship',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'in-progress' },
        ]
      },
      { 
        id: '8-3', 
        name: 'User Experience',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'in-progress' },
          { number: 5, status: 'completed' },
        ]
      },
    ],
  },
  {
    id: '9',
    name: 'Government Data',
    progress: 87.50,
    status: 'in-progress',
    subItems: [
      { 
        id: '9-1', 
        name: 'Data Governance',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
        ]
      },
      { 
        id: '9-2', 
        name: 'Data Usage & Availability',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'in-progress' },
        ]
      },
      { 
        id: '9-3', 
        name: 'Open Data',
        status: 'in-progress',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in-progress' },
        ]
      },
    ],
  },
  {
    id: '10',
    name: 'Research And Innovation',
    progress: 17.65,
    status: 'delayed',
    subItems: [
      { 
        id: '10-1', 
        name: 'Innovation',
        status: 'delayed',
        indicators: [
          { number: 1, status: 'delayed' },
          { number: 2, status: 'delayed' },
          { number: 3, status: 'delayed' },
          { number: 4, status: 'delayed' },
        ]
      },
      { 
        id: '10-2', 
        name: 'Creative Solutions',
        status: 'delayed',
        indicators: [
          { number: 1, status: 'in-progress' },
          { number: 2, status: 'delayed' },
        ]
      },
    ],
  },
];

export const evidenceDocuments: Evidence[] = [
  {
    documentNumber: '5.4.1.1',
    documentName: 'Digital_Transformation_Plan.Pdf',
    documentLead: 'Ahmed Khaled',
    documentPreparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'approved',
  },
  {
    documentNumber: '5.4.1.2',
    documentName: 'KPI_Framework.Xlsx',
    documentLead: 'Mona Hamed',
    documentPreparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending-review',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    description: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    timestamp: '5 Mins Ago',
    user: 'Ahmed Khaled',
  },
  {
    id: '2',
    description: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    timestamp: '20 Mins Ago',
    user: 'Mona Ahmed',
  },
  {
    id: '3',
    description: 'New criterion “5.3 Digital Identity” was created by Admin',
    timestamp: '1 Hour Ago',
    user: 'Admin',
  },
];

export const topLeaders: Leader[] = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    role: 'Strategy Perspective',
    performance: 96,
    avatar: AhmedAvatar,
  },
  {
    id: '2',
    name: 'Sarah Al-Khaled',
    role: 'Beneficiary Perspective',
    performance: 94,
    avatar: SarahAvatar,
  },
  {
    id: '3',
    name: 'Mohammad Al-Mansour',
    role: 'IT Perspective',
    performance: 92,
    avatar: MohammadAvatar,
  },
];

export const performanceData = [
  { month: 'Jan', value: 85 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 45 },
  { month: 'May', value: 88 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 52 },
  { month: 'Aug', value: 85 },
  { month: 'Sept', value: 77 },
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 88 },
  { month: 'Dec', value: 80 },
];