import { section } from 'framer-motion/client'
import React, { useState, useEffect, useRef } from 'react'
import noDataImg from "../../public/Pngs/msg1.png";
import useReveal from '../hooks/useReveal.js';
import NoDataModal from '../components/common/NoDataModal.jsx';
import api from '../services/api.js';


const ResultsPage = () => {

  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });

  const [results, setResults] = useState([])


  const fetchResults = async () => {
    const res = await api.get('/api/getresults');
    console.log(res.data);
    setResults(res.data.AllResults);
  }

  useEffect(() => {
    fetchResults()
  }, [])


  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">

      {results ? (
        < NoDataModal
          src={noDataImg}
          alt='no-data-image'
          msg='Oppps! No results found' />
      ) : (
        results.map((item) => (
          <div key={item.id} className="p-4 border-b">
            {item.name}
          </div>
        ))
      )}


    </section>
  )
}

export default ResultsPage