import React from 'react';

const Car  = ( {children, color} ) => {

    const colorInfo = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);

  if (children) {
    return (
      <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
        <p>Marque: { children }</p>
        { colorInfo }
      </div>
    )
  }
  
  return(
    <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
      <p>pas de données</p>
    </div>
  )
}

export default Car;