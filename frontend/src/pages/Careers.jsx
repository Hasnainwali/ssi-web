import { section } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import noDataImg from "../../public/Pngs/msg.png";
import useReveal from '../hooks/useReveal.js';
import NoDataModal from '../components/common/NoDataModal.jsx';
import api from '../services/api.js'



const Careers = () => {

  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });

  const [careers, setCareers] = useState([]);


  const fetchCareers = async () => {
    const response = await api.get('/api/getcareeres');
    setCareers(response.data.AllCareers)
  }

  useEffect(() => {
    fetchCareers();
  }, [])


  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">

      {careers ? (
        < NoDataModal
          src={noDataImg}
          alt='no-careers-image'
          msg='No Job Available Currently' />
      ) :
        (
          careers.map((item) => (
            <div key={item.id} className="p-4 border-b">
              {item.name}
            </div>
          ))
        )}

    </section>
  )
}

export default Careers