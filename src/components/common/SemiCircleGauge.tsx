interface SemiCircleGaugeProps {
    percentage: number;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    color?: string;
}

export const SemiCircleGauge = ({
    percentage,
    size = 'md',
    showLabel = true,
    color
}: SemiCircleGaugeProps) => {
    const sizeConfig = {
        sm: { dimension: 140, strokeWidth: 12, fontSize: 'text-xl' },
        md: { dimension: 200, strokeWidth: 14, fontSize: 'text-3xl' },
        lg: { dimension: 260, strokeWidth: 16, fontSize: 'text-5xl' },
    };

    const { dimension, strokeWidth, fontSize } = sizeConfig[size];
    const radius = (dimension - strokeWidth) / 2;
    const circumference = Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const getColor = () => {
        if (color) return color;
        if (percentage >= 80) return '#1EA54E';
        if (percentage >= 60) return '#DB1F26';
        if (percentage >= 40) return '#f59e0b';
        return '#ef4444';
    };

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                width={dimension}
                height={dimension / 2 + 20}
                className="overflow-visible"
            >

                <path
                    d={`M ${strokeWidth / 2} ${dimension / 2} A ${radius} ${radius} 0 0 1 ${dimension - strokeWidth / 2} ${dimension / 2}`}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />

                <path
                    d={`M ${strokeWidth / 2} ${dimension / 2} A ${radius} ${radius} 0 0 1 ${dimension - strokeWidth / 2} ${dimension / 2}`}
                    fill="none"
                    stroke={getColor()}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    style={{
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                    }}
                />
            </svg>
            {showLabel && (
                <div className={`absolute bottom-2 inset-x-0 flex items-center justify-center ${fontSize} font-bold`}>
                    {percentage}%
                </div>
            )}
        </div>
    );
};