import React, { Suspense, useState, useEffect } from 'react'
import { Navigate, Routes, Route, } from 'react-router-dom'

import Layout from '../components/layout/Layout'
import { Loader } from '../components/common/Loader'


// For performance and lazy loading
const Home = React.lazy(() => import('../pages/Home'))
const AboutPage = React.lazy(() => import('../pages/AboutPage'))
const CoursesPage = React.lazy(() => import('../pages/CoursesPage'))
const CourseDetails = React.lazy(() => import('../pages/CourseDetails'))
const EventsPage = React.lazy(() => import('../pages/EventsPage'))
const EventDetails = React.lazy(() => import('../pages/EventDetails'))
const ResultsPage = React.lazy(() => import('../pages/ResultsPage'))
const Careers = React.lazy(() => import('../pages/Careers'));
const Gallery = React.lazy(() => import('../pages/Gallery'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const TermsAndPrivacyPage = React.lazy(() => import('../pages/TermsAndPrivacyPage'));


const AllRoutes = () => {


    return (
        <>
            <Suspense fallback={< Loader />}>

                <Routes>
                    {/* Layout */}
                    <Route path="/" element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/courses' element={<CoursesPage />} />

                        <Route path='/course/:id' element={<CourseDetails />} />

                        <Route path='/events' element={<EventsPage />} />
                        <Route path='/event/:id' element={<EventDetails />} />
                        <Route path='/results' element={<ResultsPage />} />
                        <Route path='/careers' element={<Careers />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/contact-us' element={<ContactPage />} />
                        <Route path='/privacy-terms' element={<TermsAndPrivacyPage />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>


                </Routes>

            </Suspense>

        </>
    )
}

export default AllRoutes