interface StatusBadgeProps {
    status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed' | 'approved' | 'pending-review';
    size?: 'sm' | 'md' | 'lg';
  }
  
  export const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
    const config = {
      'not-started': { bg: 'bg-gray-200', text: 'text-gray-700', label: 'Not Started' },
      'in-progress': { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'In Progress' },
      'completed': { bg: 'bg-green-100', text: 'text-green-700', label: 'Completed' },
      'partially-uploaded': { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Partially Uploaded' },
      'fully-uploaded': { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Fully Uploaded' },
      'delayed': { bg: 'bg-red-100', text: 'text-red-700', label: 'Delayed' },
      'approved': { bg: 'bg-green-100', text: 'text-green-700', label: 'Approved' },
      'pending-review': { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending Review' },
    };
  
    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };
  
    const { bg, text, label } = config[status];
  
    return (
      <span className={`${bg} ${text} ${sizeClasses[size]} rounded-full font-medium inline-block`}>
        {label}
      </span>
    );
  };