import React from 'react'
import '../../styles/Brain.css'

const Brain = () => {
  return (
    <div>
    <h1>Salas de Brainstorming</h1>
    <p>Una sala de brainstorming, o también conocida como sala de lluvia de ideas, es un espacio diseñado específicamente para fomentar la creatividad y la generación de ideas innovadoras.</p>
    <div className='brains'>
      <div className="tarjeta-brains">
        <div className="titulo">Sala 301</div>
        <div className="cuerpo">
          <img src="/images/saladebrainstorming401.jpg" alt="Target" />
          x100
        </div>
      </div>
      <div className="tarjeta-brains">
        <div className="titulo">Sala 302</div>
        <div className="cuerpo">
          <img src="/images/saladebrainstorming402.jpg" alt="Target" />
          x100
        </div>
      </div>
    </div>
  </div>
  )
}

export default Brain