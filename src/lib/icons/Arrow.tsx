import { FC } from 'react';
import { IconProps } from '../IconProps.ts';

const Arrow: FC<IconProps> = ({ size = 24, color = '#fff', direction, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
            {...props}
        >
            {direction === 'left' ? (
                <>
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </>
            ) : (
                <>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </>
            )}
        </svg>
    );
};

export default Arrow;
