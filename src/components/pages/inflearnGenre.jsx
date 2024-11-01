import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import '../../assert/css/section.css'
import '../../assert/layout.css'

import { items } from '../../data/data'

const Inflearn = () => {
  const { genre } = useParams(); 
  const navigate = useNavigate();

  const genreArray = genre ? genre.split(',') : [];

  const filteredItems = genreArray.length > 0 
    ? items.filter(item => genreArray.some(g => item.genre.includes(g)))
    : items;

  const handle = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <section id='Inflearn'>
      <div className='inflearn__inner'>
        {filteredItems.map((item) => (
          <div key={item.id} className='item'>
            <img src={item.src} alt={item.title} onClick={() => handle(item.id)} />
            <h4 onClick={() => handle(item.id)}>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Inflearn;
