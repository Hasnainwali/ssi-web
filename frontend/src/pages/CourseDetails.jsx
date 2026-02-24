import react, { useState, useEffect, useMemo } from 'react'
import {
  Code, Monitor, PenTool, Box, Terminal, Menu, X, ChevronRight,
  Star, Users, Clock, CheckCircle, Search, MapPin, Phone, Mail,
  Calendar, Award, Briefcase, ArrowRight, Play, ExternalLink,
  Linkedin, Facebook, Youtube, Instagram, X as XIcon, GraduationCap,
  Trophy, FileCheck
} from 'lucide-react';

import { useParams, useNavigate, useLocation } from "react-router-dom";
import { coursesData } from '../All data/courses';
import { BackBtn } from '../components/common/BackBtn';
import useReveal from '../hooks/useReveal.js'
import { EnrollmentModal } from '../components/common/EnrollmentModel.jsx';



const CourseDetails = ({ toggleEnrollModal }) => {

  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });

  const { id } = useParams();
  const navigate = useNavigate();

  // Memoize course lookup
  const selectedCourse = useMemo(() => coursesData.find((c) => c.id === id), [id]);


  return (
    <>
      <section className='h-auto py-20 bg-[#0F172A] relative'>
        <div className='container mx-auto w-full h-screen grid sm:grid-cols-2 gap-4 justify-center items-center'>

          <div className='w-full p-4 slide-left'>
            <h1 className='main-h1 my-10'>{selectedCourse.title}</h1>
            <img src={selectedCourse.image} alt={`${selectedCourse.title}-image`} className='w-full h-[60%] rounded shadow-2xl' />
          </div>

          <div className='w-full p-4 fade-up'>

            <div className='my-3'>
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                {selectedCourse.level}
              </span>
            </div>


            <p className="text-slate-400 mb-4 line-clamp-2">{selectedCourse.desc}</p>

            <div className="mb-6 text-sm text-slate-400">
              <div className="flex items-center my-3"><Clock className="w-4 h-4 mr-2" /> {selectedCourse.duration}</div>
              <div className="flex items-center my-3"><Users className="w-4 h-4 mr-2" /> {selectedCourse.students}+ Students</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCourse.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{tag}</span>
              ))}
            </div>

            <div className='flex justify-between w-full flex-wrap'>

              <div>
                <span className="block text-xs text-slate-400">Course Fee</span>
                <span className="text-lg font-bold text-white">{selectedCourse.price}</span>
              </div>

              <div className='btns flex gap-3 my-4'>
                <button className="text-black bg-white p-2 rounded-md hover:text-blue flex items-center transition-colors text-sm animate-fade-in-up"
                  onClick={() => setIsEnrollModalOpen(true)}  >
                  Enroll Now
                </button>

                <BackBtn
                  child='Back' />
              </div>

            </div>


          </div>

        </div>

        {/* apply form */}
        <EnrollmentModal
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          selectedCourse={selectedCourse.title}
        />

      </section>
    </>
  )
}

export default CourseDetails