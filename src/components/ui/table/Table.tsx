'use client'

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Table(
    {
        caption,
        columns,
        data: initialData,
        uniqueKey,
        customTableClass,
        customThClass,
        customTdClass,
        customTfClass,
        tableStriped = false,
        tableHover = false,
        onView = undefined,
        onEdit = undefined,
        onDelete = undefined,
        action = false,
        responsive = false,
        search = false,
        print = false,
        sort = false,
        serialized = false,
        sumFields = [],
    }:
        {
            caption?: React.ReactNode
            columns: any[],
            data: any[],
            uniqueKey: any,
            customTableClass?: string,
            customThClass?: string,
            customTdClass?: string,
            customTfClass?: string,
            tableStriped?: boolean,
            tableHover?: boolean,
            onView?: any,
            onEdit?: any,
            onDelete?: any,
            action?: boolean,
            responsive?: boolean
            search?: boolean
            print?: boolean
            sort?: boolean,
            serialized?: boolean,
            sumFields?: any[]
        }
) {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortDirection, setSortDirection] = useState('ascending');

    const componentRef = useRef(null);


    const responsiveClass = 'w-full overflow-auto print:overflow-visible print:px-4 print:pb-4';
    const tableClass = `min-w-full ${customTableClass}`;
    const thClass = `py-1 px-2 border-b border-gray-300 print:border-gray-700 text-left font-semibold print:text-sm print:pt-4 print:pb-2 ${sort && 'cursor-pointer'}  ${customThClass}`;
    const tdClass = `py-1 px-2 border-b border-gray-300 print:border-gray-700 ${customTdClass}`;
    const tfootClass = `py-1 px-2 font-semibold ${customTfClass}`;
    const stripedRowClass = 'bg-gray-100';
    const hoverClass = 'hover:bg-gray-200'


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    function renderNestedCell(row: any, key: any) {
        const nestedValue = key.split('.').reduce((acc: any, currentKey: any) => {
            if (acc && acc[currentKey] !== undefined) {
                return acc[currentKey];
            }
            return '';
        }, row);

        return typeof nestedValue === 'object'
            ? JSON.stringify(nestedValue)
            : nestedValue;
    }

    const compareValues = (a: any, b: any) => {
        return typeof a === 'number' && typeof b === 'number'
            ? a - b
            : String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
    };

    const handleSort = (key: any) => {
        if (!sort) {
            // Sorting is not enabled, do nothing
            return;
        }

        setSortKey(key);
        setSortDirection((prevDirection) => (prevDirection === 'ascending' ? 'descending' : 'ascending'));

        setData((prevData) =>
            [...prevData].sort((a, b) => {
                const valueA = getNestedValue(a, key);
                const valueB = getNestedValue(b, key);

                return sortDirection === 'ascending' ? compareValues(valueA, valueB) : compareValues(valueB, valueA);
            })
        );
    };

    const getNestedValue = (obj: any, key: any) => {
        return key.split('.').reduce((acc: any, currentKey: any) => {
            return acc && acc[currentKey] !== undefined ? acc[currentKey] : null;
        }, obj);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Filter the data based on the search term
        const filteredData = initialData.filter((row) => {
            return Object.keys(row).some((key) => {
                const value = row[key];
                if (typeof value === 'object' && value !== null) {
                    // If the property is an object, recursively search its properties
                    return searchNestedObject(value, term);
                } else {
                    // Otherwise, perform a regular case-insensitive search
                    return String(value).toLowerCase().includes(term);
                }
            });
        });

        setData(filteredData);
    };

    const searchNestedObject = (obj: any, term: string): boolean => {
        return Object.keys(obj).some((key) => {
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                // If the property is an object, recursively search its properties
                return searchNestedObject(value, term);
            } else {
                // Otherwise, perform a regular case-insensitive search
                return String(value).toLowerCase().includes(term);
            }
        });
    };

    const calculateColumnSum = (key: any) => {
        if (!key) {
            return 0;
        }

        return data.reduce((sum, row) => {
            const keys = key.split('.');
            const nestedValue = keys.reduce((acc: any, currentKey: any) => {
                return acc && acc[currentKey] !== undefined ? acc[currentKey] : null;
            }, row);

            return sum + (nestedValue || 0);
        }, 0);
    };

    const getSumResults: any = () => {
        const sumResults: any = {};
        sumFields.forEach((field) => {
            sumResults[field] = calculateColumnSum(field);
        });
        return sumResults;
    };

    return (
        <div>
            {/* Search input */}
            <div className="flex items-center justify-between mb-4">
                {
                    search ?
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div> : <div></div>
                }

                {
                    print && <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium  py-1 px-4 mr-2 rounded" onClick={handlePrint}>Print</button>
                }
            </div>
            {/* Table  */}
            <div className='print:p-5' ref={componentRef}>
                <div className={`${responsive ? responsiveClass : ''}`}  >
                    <table className={tableClass}>
                        <caption>{caption}</caption>
                        <thead>
                            <tr>
                                {serialized && (
                                    <th className={`${thClass} max-w-max text-center`}>Sl.</th>
                                )}
                                {columns.map((column) => (
                                    <th key={column.key} className={`${thClass} ${column.customClass || ''}`} onClick={() => handleSort(column.key)}>
                                        {column.label}
                                        {sort && sortKey === column.key && (
                                            <span className="ml-2">
                                                {sortDirection === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                ))}
                                {action && (
                                    <th className={`${thClass} print:hidden sticky right-0 whitespace-nowrap`}>Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index: number) => (
                                <tr key={uniqueKey ? row[uniqueKey] : index}
                                    className={`${index % 2 === 0 && tableStriped ? stripedRowClass : ''} ${tableHover && hoverClass}`}
                                >
                                    {serialized &&
                                        <td className={`${tdClass} text-center`}>
                                            {index + 1}
                                        </td>
                                    }
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className={`${tdClass} ${column.customDataClass ? column.customDataClass(row) : ''}`}
                                        >
                                            {column.render
                                                ? column.render(row) // Call the custom rendering function if provided
                                                : column.key.includes('.')
                                                    ? renderNestedCell(row, column.key)
                                                    : row[column.key]}
                                        </td>
                                    ))}
                                    {action && (
                                        <td className={`${tdClass} print:hidden sticky right-0 whitespace-nowrap`}>
                                            {onView && (
                                                <button
                                                    className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] text-gray-900 border border-gray-400 shadow-sm hover:from-gray-200 hover:to-gray-300 p-0.5 rounded transition-all" title='View'
                                                    onClick={() => onView(row[uniqueKey])}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>

                                                </button>
                                            )}

                                            {onEdit && (
                                                <button
                                                    className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] text-gray-900 border border-gray-400 shadow-sm hover:from-gray-200 hover:to-gray-300 p-0.5 rounded transition-all" title='Edit'
                                                    onClick={() => onEdit(row[uniqueKey])}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>

                                                </button>
                                            )}

                                            {onDelete && (
                                                <button
                                                    className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] text-gray-900 border border-gray-400 shadow-sm hover:from-gray-200 hover:to-gray-300 p-0.5 rounded transition-all" title='Delete'
                                                    onClick={() => onDelete(row[uniqueKey])}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>

                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                        {
                            sumFields &&
                            <tfoot className='table-row-group'>
                                <tr>
                                    {serialized && (
                                        <td className={`${tfootClass} max-w-max text-center`}></td>
                                    )}
                                    {columns.map((column) => (
                                        <td key={column.key} className={tfootClass}>
                                            {sumFields.includes(column.key) ? (
                                                `Total ${column.key}: ${getSumResults()[column.key]}`
                                            ) : (
                                                ''
                                            )}
                                        </td>
                                    ))}

                                    {action && <td className={`${tfootClass} max-w-max text-center`}></td>}
                                </tr>
                            </tfoot>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}