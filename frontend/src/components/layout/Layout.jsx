import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import FullSEO from '../common/Seo'
import { EnrollmentModal } from '../common/EnrollmentModel'


const layout = () => {

    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);


    return (
        <>
            <FullSEO
                title="Syed Software Institute"
                description="Empowering Bannu’s Talent with IT Skills"
                image="https://res.cloudinary.com/dhnkdcbz4/image/upload/v1758515661/logo_igh9nz.webp"
                url="https://ssi-bannu.vercel.app/"
            />

            <Navbar toggleEnrollModal={() => setIsEnrollModalOpen(true)} />

            {/* Content and pages */}
            <main className='relative min-h-screen overflow-hidden'>
                <Outlet />
            </main>

            {/* apply form */}
            <EnrollmentModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
            />

            <Footer />
        </>
    )
}

export default layout