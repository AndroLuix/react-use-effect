import React, { useEffect, useState } from 'react'

const ClenUpEffect = () => {

    const [size,setSize] = useState(window.innerWidth);

    console.log('render')

    const widthWindow = () =>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        console.log('Setto AddEventListener')
        window.addEventListener('resize',widthWindow);
        // return () => {
        //     console.log('Rimuovo AddEventListener')
        //     window.removeEventListener('resize',widthWindow);
        // }

    },[window]);
  return (
    <div className='my-5'>
        <h3>Cleun Up Effect</h3>
        <div className='shadow py-3'>
        <h1>Width of Window:  {size}</h1>
        </div>
    </div>
  )
}

export default ClenUpEffect