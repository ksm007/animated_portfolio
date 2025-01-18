import React from 'react'
import { FaGithubSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="#"><FaGithubSquare /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
            </div>

        </div>

        
    </div>
  )
}

export default Footer