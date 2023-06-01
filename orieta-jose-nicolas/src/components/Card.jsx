import React from 'react'

const Card = ({name, email}) => {
  return (
    <div className = "card">
      <h2>Legajo</h2>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Card