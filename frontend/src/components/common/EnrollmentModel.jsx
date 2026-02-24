import React, { useState, useEffect, useRef } from "react";
import {
    X, GraduationCap,
    Trophy, FileCheck
} from 'lucide-react';
import api from "../../services/api.js";
import toast from "react-hot-toast";

export const EnrollmentModal = ({ isOpen, onClose, selectedCourse }) => {
    if (!isOpen) return null;

    const [applyData, setApplyData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        course: selectedCourse || '',
    })

    useEffect(() => {
        if (selectedCourse) {
            setApplyData(prev => ({
                ...prev,
                course: selectedCourse
            }));
        }
    }, [selectedCourse]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplyData({ ...applyData, [name]: value })
        // console.log(applyData, 'applydata');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/apply', applyData);
            toast.success(response.data.msg)

        }
        catch (err) {
            if (err.response && err.response.data.msg) {
                toast.error(err.response.data.msg);
            }
        }
    };



    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-[#1E293B] w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl relative z-10 p-8 animate-fade-in-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">Start Your Journey</h2>
                <p className="text-slate-400 mb-6 text-sm">Fill out the form below to register for upcoming batches.</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            className="bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />

                        <input type="text" placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            className="bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
                    </div>

                    <input type="email" placeholder="Email Address" name="email" onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />

                    <input type="text" placeholder="Address" name="address" onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />

                    <input type="number" placeholder="Phone Number (WhatsApp)" name="phone" minLength="11" onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />

                    <select name="course" onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none">
                        <option disabled>Select Course</option>
                        <option value={"web development"}>Web Development</option>
                        <option value={"graphic designing"}>Graphic Designing</option>
                        <option value={"3D modeling"}>3D Modeling </option>
                        <option value={"office automation"}>Office Automation</option>
                        <option value={"python"}>Python</option>
                        <option value={"fiver"}>Fiver</option>
                    </select>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg mt-4 transition-colors">
                        Submit Application
                    </button>

                </form>

            </div>
        </div>
    );
};