import react, { useState, useEffect, useRef } from 'react'
import {
  Code, Monitor, PenTool, Box, Terminal, Menu, X, ChevronRight,
  Star, Users, Clock, CheckCircle, Search, MapPin, Phone, Mail,
  Calendar, Award, Briefcase, ArrowRight, Play, ExternalLink,
  Linkedin, Facebook, Youtube, Instagram, X as XIcon, GraduationCap,
  Trophy, FileCheck
} from 'lucide-react';
import SecHeading from '../components/common/SecHeading';
import { eventsData } from '../All data/events';
import api from '../services/api.js';





const EventsPage = () => {


  const [filter, setFilter] = useState('All');
  const [events, setEvents] = useState(null);

  const categories = ['All', 'Meetings', 'Seminars', 'Functions', 'Trainings'];




  const fetchEvents = async () => {
    const res = await api.get('/api/getevents');
    console.log(res.data);
    setEvents(res.data.AllEvents);
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const filteredEvents = filter === 'All' ? eventsData : eventsData.filter(c => c.category === filter);

  return (
    <section id="events" className="py-24 bg-[#0F172A] relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

          <SecHeading
            heading="The Latest"
            span="Events" />
          <p className="text-slate-400 max-w-2xl mx-auto">Join Today To Celebrate With Us.</p>


          {/* Categories buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-tr-lg rounded-bl-lg text-sm font-medium transition-all ${filter === cat
                  ? 'bg-blue-800 border-1 border-white text-white/70 shadow-lg shadow-blue-600/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-[#1E293B]/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/20 transition-all hover:-translate-y-2 group">


              <img src={event.img} alt="event-img"
                className='w-full h-auto bg-cover size-cover rounded-md' />


              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.tag}</p>


              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-400">
                {/* <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {event.day}<div> */}
              </div>


              {/* <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <div>
                  <span className="block text-xs text-slate-400">Course Fee</span>
                  <span className="text-lg font-bold text-white">{course.price}</span>
                </div>
                <button className="text-blue-400 font-semibold hover:text-white flex items-center transition-colors">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div> */}

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default EventsPage