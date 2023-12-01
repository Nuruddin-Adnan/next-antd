'use client'

import Offcanvas from '@/components/ui/offcanvas/Offcanvas ';
import React, { useState } from 'react'

export default function OffcanvasPage() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };
    return (
        <div>

            <button
                onClick={toggleOffcanvas}
                className="py-2 px-4 rounded text-2xl bg-gray-900 text-white"
            >
                ☰
            </button>

            {/* Offcanvas Content */}
            <Offcanvas isOpen={isOffcanvasOpen} toggleOffcanvas={toggleOffcanvas} position='right' className='w-64'>
                <p className="text-gray-600">
                    This is the content inside the offcanvas.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi ullam esse nesciunt natus error soluta, quis eum dolore est laudantium repellat, enim debitis veritatis explicabo possimus distinctio, nulla ab. lorem1000
                </p>
            </Offcanvas>
        </div>
    )
}
