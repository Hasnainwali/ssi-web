import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const BackBtn = ({ child }) => {

    const navigate = useNavigate()

    return (
        <>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className={`hero-cta-1 text-sm mx-2 text-center rounded-md animate-fade-in-up`}
                >
                    <ArrowLeft className="p-2 text-black ml-2 w-8 h-8" />{child}
                </button>
            </div>

        </>
    )
}
