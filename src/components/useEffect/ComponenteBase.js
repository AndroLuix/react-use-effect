import React, { useEffect } from 'react'

const ComponenteBase = () => {
    const [value, SetValue] = React.useState(0);

    // funzioni
    const aumenta = () => {
        SetValue((oldValue) => oldValue + 1);

    }

  

    // Hook

    useEffect(() => {
        console.log('use effect chiamato');
        if(value < 1){
            document.title = 'Nessun Messaggio';
        }else{
            document.title = `Nuovo Messaggio ${value}`;
            
        }
        return () => console.log('Clen up function chiamata')
    },[value]); //viene chiamato useEffect solo quado verrà considerato 'value'


    return (
        <>

                <div>Componente Base</div>

                <h4>{""} Message : <span className='fs-2'> {value}</span> </h4>


                <button className='btn btn-secondary my-2' onClick={aumenta}>Increment Value</button>

        </>

    )
}

export default ComponenteBase