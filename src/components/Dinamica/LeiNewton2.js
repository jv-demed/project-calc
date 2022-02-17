import React, { useState } from "react";
import styled from "styled-components";

const LeiNewton2Styled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.grey.main};
    border-radius: 5px;
    display: flex;
    gap: 5px;
    padding: 50px;
    input{
        border: none;
        border-radius: 2px;
        height: 25px;
        padding: 10px;
        width: 50px;
    }
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
            
            // if(force != '' && acceleration != '' && mass == ''){
            //     setMass(force / acceleration);
            //     console.log('m: ' + mass);
            //     document.querySelector('.mass').value = mass;
            // }
            
            // if(force != '' && mass != '' && acceleration == ''){
            //     setAcceleration(force / mass);
            //     console.log('a: ' + acceleration);
            //     document.querySelector('.acceleration').value = acceleration;
            // }
        }
    )

    return(
        <LeiNewton2Styled>
            <input className='force' placeholder='F' onChange={(event) => {
                setForce(event.target.value);
            }} /> 
            = 
            <input className='mass' placeholder='m' onChange={(event) => {
                setMass(event.target.value);
            }}/> 
            *
            <input className='acceleration' placeholder='a' onChange={(event) => {
                setAcceleration(event.target.value);
            }}/>
        </LeiNewton2Styled>
    )
}