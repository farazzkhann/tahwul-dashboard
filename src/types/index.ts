export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    status: 'completed' | 'in-progress' | 'upcoming' | 'delayed';
  }
  
  export interface StatCard {
    id: string;
    label: string;
    value: string | number;
    icon?: string;
    trend?: 'up' | 'down';
  }
  
  export interface Perspective {
    id: string;
    name: string;
    progress: number;
    status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
    subItems?: SubPerspective[];
  }
  
  export interface SubPerspective {
    id: string;
    name: string;
    status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
    indicators?: Array<{
      number: number;
      status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
    }>;
  }
  
  export interface Evidence {
    documentNumber: string;
    documentName: string;
    documentLead: string;
    documentPreparer: string;
    date: string;
    dueDate: string;
    status: 'approved' | 'pending-review' | 'in-progress';
  }
  
  export interface Activity {
    id: string;
    description: string;
    timestamp: string;
    user: string;
  }
  
  export interface Leader {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    performance?: number;
  }