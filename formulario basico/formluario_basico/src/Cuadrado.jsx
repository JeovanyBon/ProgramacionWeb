import React, { useState} from 'react';

function Cuadrado(){
    const [lado, setLado] = useState(0);
    const [area, setArea] = useState(0);

    const handleCalcular = () => {
        setArea(lado * lado);
    };

    return (
        <div>

            <h2>Area del cuadrado:</h2>
            <button onClick={handleCalcular}>Calcular</button>
            <p>Area: {area}</p>
        </div>
    );
}

export default Cuadrado;