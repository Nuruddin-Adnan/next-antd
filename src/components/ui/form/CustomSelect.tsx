import cn from "@/lib/cn";

export default function CustomSelect(
    {
        options,
        size,
        inline,
        label,
        labelClassName,
        name,
        onSelectChange,
        defaultValue,
        title = '-- select one --'
    }: {
        options: { title: string, value: any }[],
        size?: string,
        inline?: boolean,
        label?: React.ReactNode | string,
        labelClassName?: string,
        name?: string,
        onSelectChange?: any,
        defaultValue?: string | number,
        title?: string
    }) {

    const selectStyle = {
        padding: '6px 8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        color: 'rgb(17, 24, 39)',
        backgroundColor: '#fff',
        display: 'block',
        width: '100%'
    };

    if (size) {
        if (size === 'xl') {
            selectStyle.padding = '12px 16px'
            selectStyle.fontSize = '1.25rem'
        }
        if (size === 'lg') {
            selectStyle.padding = '8px 16px'
            selectStyle.fontSize = '1.125rem'
        }
        if (size === 'sm') {
            selectStyle.padding = '4px 8px'
        }
    }


    return (
        <div className={inline ? "sm:flex items-center whitespace-nowrap gap-4" : ''}>
            {label && <label className={cn(
                "block text-sm font-medium text-gray-900 mb-0.5",
                labelClassName
            )}>
                {label}
            </label>}
            <select
                name={name}
                onChange={(event) => onSelectChange(event)}
                style={selectStyle}
                defaultValue={defaultValue}
            >
                <option value="" disabled>{title}</option>
                {
                    options.map((item: any, index: number) => (
                        <option key={index} value={item.value}>{item.title}</option>
                    ))
                }
            </select>
        </div>
    );
}