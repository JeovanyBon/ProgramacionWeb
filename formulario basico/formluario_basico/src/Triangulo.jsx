import React, { useState} from 'react';

function Triangulo(){
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState(0);

    const handleCalcular = () => {
        setArea((base * altura)/2);
    };

    return (
        <div>

            <h2>Area del triangulo:</h2>
            <button onClick={handleCalcular}>Calcular</button>
            <p>Area: {area}</p>
        </div>
    );
}

export default Triangulo;