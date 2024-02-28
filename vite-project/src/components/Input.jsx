import React from 'react'

const Imput = () => {
return (
    <>
    <label>
    INGRESE NOMBRE : <input name="myInput" />
    </label>
    <hr />
    <label>
    TOMA DE HORA <input type="checkbox" name="myCheckbox" />
    </label>
    <hr />
    
    <hr />
    <label>
    ESTERILIZACIONES<input type="checkbox" name="myCheckbox" />
    </label>
    <hr />
    <p>
    TIPO DE MASCOTA:
    <label>
        <input type="radio" name="myRadio" value="option1" />
        MAMIFERO
    </label>
    <label>
        <input type="radio" name="myRadio" value="option2" />
        REPTIL
    </label>
    <label>
        <input type="radio" name="myRadio" value="option3" />
        AVE
    </label>
    </p>
</>
);
}




export default Imput
