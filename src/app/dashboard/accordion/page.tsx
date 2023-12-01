import Accordion from '@/components/ui/accordion/Accordion'
import React from 'react'

export default function AccordionPage() {
    const accordionItems = [
        {
            title: 'Section 1',
            content: <p className='text-blue-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consequatur nam temporibus autem praesentium velit quia earum. Officiis fuga nemo tenetur labore impedit accusantium expedita! Fuga necessitatibus accusantium dignissimos eligendi?</p>,
        },
        {
            title: 'Section 2',
            content: 'Content for Section 2',
        },
        {
            title: 'Section 3',
            content: 'Content for Section 3',
        },
    ];
    return (
        <div className='container p-5 mx-auto mt-6 bg-white rounded-lg'>
            <h2 className='text-xl font-medium text-gray-900 border-b border-b-gray-300 mb-10 pb-1'>Accordion</h2>
            <Accordion items={accordionItems} defaultOpenIndex={0} icon='arrow' itemClassName='mb-2' headingClassName='text-lg' contentClassName='bg-sky-100' />
            <br /><br />
            <Accordion items={accordionItems} defaultOpenIndex={0} itemClassName='mb-0' headingClassName='text-lg' activeClass='text-red-500' />
        </div>
    )
}
