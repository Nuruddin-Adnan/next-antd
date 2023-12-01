import cn from "@/lib/cn";

export default function Textarea(
    {
        rows = 3,
        size,
        name,
        placeholder,
        label,
        inline,
        defaultValue,
        className,
        onChange,
        labelClassName,
    }: {
        rows?: number,
        size?: string,
        name?: string,
        placeholder?: string,
        label?: React.ReactNode | string,
        inline?: boolean,
        defaultValue?: string | number,
        className?: string,
        onChange?: any,
        labelClassName?: string,
    }) {

    const inputStyle = {
        padding: '6px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: 'rgb(17, 24, 39)',
        backgroundColor: '#fff',
        display: 'block',
        width: '100%',
        fontSize: '1rem'
    };

    if (size) {
        if (size === 'xl') {
            inputStyle.padding = '12px 16px'
            inputStyle.fontSize = '1.25rem'
        }
        if (size === 'lg') {
            inputStyle.padding = '8px 16px'
            inputStyle.fontSize = '1.125rem'
        }
        if (size === 'sm') {
            inputStyle.padding = '4px 8px'
        }
    }

    function handleChange(event: any) {
        const newValue = event.target.value
        if (onChange) onChange(newValue);
    };

    return (
        <div className={inline ? "sm:flex items-center whitespace-nowrap gap-4" : ''}>
            {label && <label className={cn(
                "block text-sm font-medium text-gray-900 mb-0.5",
                labelClassName
            )}>
                {label}
            </label>}
            <textarea
                rows={rows}
                defaultValue={defaultValue}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                style={inputStyle}
                className={className}
            />
        </div>
    );
};