interface ProgressCircleProps {
    percentage: number;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
  }
  
  export const ProgressCircle = ({ percentage, size = 'md', showLabel = true }: ProgressCircleProps) => {
    const sizeConfig = {
      sm: { dimension: 60, strokeWidth: 6, fontSize: 'text-sm' },
      md: { dimension: 80, strokeWidth: 8, fontSize: 'text-base' },
      lg: { dimension: 120, strokeWidth: 10, fontSize: 'text-2xl' },
    };
  
    const { dimension, strokeWidth, fontSize } = sizeConfig[size];
    const radius = (dimension - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    const getColor = () => {
      if (percentage >= 80) return '#1EA54E';
      if (percentage >= 60) return '#3b82f6';
      if (percentage >= 40) return '#f59e0b';
      return '#ef4444';
    };
  
    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={dimension} height={dimension} className="transform -rotate-90">
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            stroke={getColor()}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {showLabel && (
          <div className={`absolute inset-0 flex items-center justify-center ${fontSize} font-bold`}>
            {percentage}%
          </div>
        )}
      </div>
    );
  };