import React, {useState} from 'react';

function Rectangulo(){
    const [base, setBase] = useState(0);
    const [altura,setAltura] = useState(0);
    const [area,setArea] = useState(0);

    const handleCalcular = () => {
        setArea(base * altura);
    };

    return (
        <div>
            <h2>Area del rectangulo</h2>
            <button onClick={handleCalcular}>Calcular</button>
            <p>Area: {area}</p>
            </div>      
    );
}

export default Rectangulo;
