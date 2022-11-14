import React from 'react'
import { Link } from 'react-router-dom'

function Pagina404() {
  return (
    <div className='justify-center w-full px-4 mt-10'>Error 404, no existe ninguna página con la ruta especificada ir a <Link to="/" className='cursor-pointer underlined text-blue-700'>Página Principal</Link> </div>
  )
}

export default Pagina404