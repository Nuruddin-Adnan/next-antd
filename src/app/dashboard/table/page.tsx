'use client'

import Table from '@/components/ui/table/Table';
import React, { useState } from 'react';

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age', customClass: 'text-right w-[120px]', customDataClass: (row: any) => row.age > 30 ? 'bg-red-500 text-white text-right' : 'bg-green-500 text-white text-right' },
    { key: 'salary', label: 'Salary', customClass: 'w-[200px] text-right', customDataClass: () => 'text-right' },
    { key: 'test.nested', label: 'Test Nested Sum', customClass: 'text-right', customDataClass: () => 'text-right' },
    { key: 'email', label: 'Email' },
    { key: 'address.dist', label: 'Dist' },
    { key: 'address.division', label: 'Division' },
    {
        key: 'customField',
        label: 'Custom Field',
        render: (row: any) => (
            <div>
                Custom Rendering:
                <br />
                {console.log(row)}

                {row?.name} - {row.test?.nested}
            </div>
        ),
    },
];

const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com', salary: 4000, test: { nested: 500 } },
    { id: 2, name: 'Cohn Sina', age: 30, email: 'jane@example.com', salary: 5000, test: { nested: 200 } },
    { id: 3, name: 'Adnan Doe', age: 50, email: 'jane@example.com', salary: 7000, test: { nested: 600 } },
    { id: 4, name: 'Rimi Doe', age: 20, email: 'jane@example.com', salary: 98000, test: { nested: 800 } },
    { id: 5, name: 'Bimi Doe', age: 55, email: 'jane@example.com', salary: 4600 },
    { id: 6, name: 'Gimi Doe', age: 18, email: 'jane@example.com', salary: 8300 },
    { id: 7, name: 'Alamgin Hossain', age: 35, email: 'jane@example.com', salary: 36700 },
    { id: 8, name: 'Test Name', age: 18, email: 'test@example.com', address: { dist: 'Narayanganj', division: 'Dhaka' }, salary: 8300 },
    { id: 9, name: 'Test Name2', age: 29, email: 'test2@example.com', address: { dist: 'Comilla', division: 'Chittagram' }, salary: 8300 },
    { id: 10, name: 'Test Name3', age: 31, email: 'test3@example.com', address: { dist: 'Borguan', division: 'Barishal' }, salary: 8300 },
    { id: 11, name: 'Gimi Doe', age: 18, email: 'jane@example.com', salary: 8300 },

    // Add more data as needed
];

export default function TablePage() {


    const handleView = (rowKey: any) => {
        // Implement view logic here
        alert(`View Key: ${rowKey}`);
    };

    const handleEdit = (rowKey: any) => {
        // Implement edit logic here
        alert(`Edit Key: ${rowKey}`);
    };

    const handleDelete = (rowKey: any) => {
        // Implement delete logic here
        alert(`Delete Key: ${rowKey}`);
    };

    return (
        <div className='container mx-auto py-5'>

            {/* Table component */}
            <Table
                columns={columns}
                data={data}
                uniqueKey="id"// need for perform action like view/edit/delete or sort
                // customTableClass="border border-gray-300"
                // customThClass="text-right"
                // customTdClass="text-right"
                tableHover
                tableStriped
                customTfClass="text-right whitespace-nowrap"
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
                action={true}
                sumFields={['age', 'salary', 'test.nested']}
                responsive
                caption={<div className="text-center print:pt-6"><h2 className='text-2xl'>This is table heading</h2></div>}
                search
                sort
                print
                serialized
            />
        </div>
    );
}