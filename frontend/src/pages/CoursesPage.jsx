import react, { useState, useEffect, useRef } from 'react'
import { ChevronRight, Star, Users, Clock, } from 'lucide-react';

import SecHeading from '../components/common/SecHeading';
import { Navigate, useNavigate } from 'react-router-dom';
import { coursesData } from '../All data/courses';
import useReveal from '../hooks/useReveal.js'
import api from '../services/api.js'



const CoursesPage = () => {


  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });


  const [filter, setFilter] = useState('All');
  const [courses, setCourses] = useState(null);

  const categories = ['All', 'Web Dev', 'Graphics', '3D Modeling', 'Office'];

  const navigate = useNavigate()
  const filteredCourses = filter === 'All' ? coursesData : coursesData.filter(c => c.category === filter);



  const fetchCourses = async () => {
    try {
      const res = await api.get('/api/getcourses');
      console.log(res.data);
      setCourses(res.data.AllCourses);
    }
    catch (error) {
      console.log(error.message);
    }
  }



  useEffect(() => {
    fetchCourses()
  }, [])




  return (
    <section id="courses" className="py-24 bg-[#0F172A] relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

          <SecHeading
            heading="Our Premium"
            span="Courses" />
          <p className="text-slate-400 max-w-2xl mx-auto fade-up">Industry-relevant designed to take you from beginner to professional.</p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative perspective-[1000px]">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-[#1E293B]/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl shadow-blue-900/20 transition-all slide-left
            hover:scale-110 cursor-pointer hover:-rotate-y-45"
              onClick={() => navigate(`/course/${course.id}`)}>
              <div className="flex justify-between items-start mb-6">
                <img className="bg-slate-800 p-3 rounded-lg border border-slate-700 group-hover:border-blue-500/50 transition-colors size-28 object-cover"
                  src={course.image} />

                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">Master the skills needed for {course.title} with hands-on projects and mentorship.</p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-400">
                <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {course.duration}</div>
                <div className="flex items-center"><Users className="w-4 h-4 mr-2" /> {course.students}+ Students</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.map(tag => (
                  <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <div>
                  <span className="block text-xs text-slate-400">Course Fee</span>
                  <span className="text-lg font-bold text-white">{course.price}</span>
                </div>

                <button className="text-blue-400 font-semibold hover:text-white flex items-center transition-colors"
                  onClick={() => navigate(`/course/${course.id}`)}>
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default CoursesPage