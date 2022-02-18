import React, { useState } from "react";
import styled from "styled-components";
import FormulaBox from '../Globals/FormulaBox';
import Input from '../Globals/Input';

const LeiNewton2Styled = styled.div`
    background-color: ${({ theme }) => theme.palette.grey.main};
    border-radius: 5px;
    padding: 5px 10px;
`

export default function LeiNewton2(){

    const [force, setForce] = useState('');
    const [mass, setMass] = useState('');
    const [acceleration, setAcceleration] = useState('');

    React.useEffect(
        () => {
            if(mass != '' && acceleration != ''){
                setForce(mass * acceleration);
                document.querySelector('.force').value = force;
            }
        }
    )

    return(
        <LeiNewton2Styled>
            <h3>2 Lei de Newton</h3>
            <FormulaBox>
                <Input 
                    className='force'
                    name='Força' 
                    unity='F' 
                    set={setForce}
                    var={force}
                />
                =
                <Input 
                    name='Massa' 
                    unity='m' 
                    set={setMass}
                    var={mass}
                />
                *
                <Input 
                    name='Acel.' 
                    unity='a' 
                    set={setAcceleration}
                    var={acceleration}
                />
                {/* <input className='force' placeholder='F' onChange={(event) => {
                    setForce(event.target.value);
                }} /> 
                = 
                <input className='mass' placeholder='m' onChange={(event) => {
                    setMass(event.target.value);
                }}/> 
                *
                <input className='acceleration' placeholder='a' onChange={(event) => {
                    setAcceleration(event.target.value);
                }}/> */}
            </FormulaBox>
        </LeiNewton2Styled>
    )
}