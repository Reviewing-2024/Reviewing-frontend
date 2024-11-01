import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../assert/css/section.css'
import '../../assert/layout.css'

import { items } from '../../data/data.js'

// import { FaHeart } from "react-icons/fa";

const Inflearn = () => {

  const navigate = useNavigate();

  const handle = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <section id='Inflearn'>
      <div className='inflearn__inner'>    
        {
          items.map((item, key) => (
            <div key={item.id} className='item'>
              <div className='item-inner'>
                <img src={item.src} alt={item.title} onClick={() => handle(item.id)}/>
                  <span onClick={() => handle(item.id)}>{item.title}</span>
                  <div className='item-rkdtk'>
                    <p>강사: {item.rkdtk}</p>
                    {/* <span className='wishlist'><FaHeart /></span> */}
                  </div>
                
              </div>
            </div>
        ))}       
      </div>
    </section>
  )
}

export default Inflearn
