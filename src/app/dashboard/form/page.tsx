'use client'

import Button from '@/components/ui/button/Button'
import Checkbox from '@/components/ui/form/Checkbox'
import CustomSelect from '@/components/ui/form/CustomSelect'
import Form from '@/components/ui/form/Form'
import FormInput from '@/components/ui/form/FormInput'
import Radio from '@/components/ui/form/Radio'
import Textarea from '@/components/ui/form/Textarea'
import React, { useState } from 'react'

const optionsData = [
    { title: 'title 1', value: 'title 1' },
    { title: 'title 2', value: 'title 2' },
    { title: 'title 3', value: 'title 3' },
]

export default function FormPage() {
    return (
        <div>
            <div className='container mx-auto p-5 '>
                <div className="grid gap-y-1 gap-x-4 ">
                    <FormInput type='date' name='firstName' inline size='sm' labelClassName='w-24' label='User Name :' onChange={(e: any) => console.log(e)} />
                    <FormInput label='Input sm : ' inline size='sm' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input regular' inline labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input lg' inline size='lg' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input xl' inline size='xl' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                </div>
                <div className="grid gap-4 lg:grid-cols-5 mt-6">
                    <FormInput type='date' size='sm' labelClassName='w-24' label='User Name :' onChange={(e: any) => console.log(e)} />
                    <FormInput label='Input sm : ' size='sm' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input regular' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input lg' size='lg' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input xl' size='xl' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                </div>
                <div className="grid lg:grid-cols-4 gap-4 mt-6">

                    <CustomSelect name='customSelect' size='sm' label='Select sm' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' label='Select regular' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' size='lg' label='Select lg' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' size='xl' label='Select xl' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                </div>

                <form className='grid grid-cols-2 lg:gap-8 g-4 mt-6'>
                    <FormInput inline label='First Name : ' name='firstName' placeholder='Enter your name' />
                    <CustomSelect inline label='Name fragment : ' options={optionsData} title='Pease select one' onSelectChange={(e: any) => e} name='age' />
                </form>
                <div className='mt-5'>
                    <Textarea placeholder='This is placeholder text' onChange={(e: any) => console.log(e)} label='Enter your message :' />
                    <br />
                    <Checkbox label='This is checkbox label' value='aggred' onChange={(e: any) => console.log(e.target.checked)} />
                    <Radio name='gender' label='Male' value='male' onChange={(e: any) => console.log(e.target.value)} />
                    <Radio name='gender' label='Female' value='female' onChange={(e: any) => console.log(e.target.value)} />
                    <Radio name='gender' label='Others' value='others' onChange={(e: any) => console.log(e.target.value)} />

                    <input type="file" className='border border-gray-300 shadow-sm rounded py-1 px-2' />
                    <br /><br />
                    <Button type='submit' variant='light'>Lg button</Button>
                </div>
                <hr className='w-full h-0.5 my-4 bg-gray-300' />
                <Form />
            </div>
        </div>
    )
}
