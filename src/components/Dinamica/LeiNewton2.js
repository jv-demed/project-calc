import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormulaBox from '../Globals/FormulaBox';
import Input from '../Globals/Input';

const LeiNewton2Styled = styled.div`
    background-color: ${({ theme }) => theme.palette.grey.main};
    border-radius: 5px;
    padding: 5px 10px;
    .force{
        transition: 0.2s ease all;
    }
    .force:focus{
        left: 50px
    }
`

export default function LeiNewton2(){

    const [force, setForce] = useState('');
    const [mass, setMass] = useState('');
    const [acceleration, setAcceleration] = useState('');

    useEffect(
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
                    className='mass'
                    name='Massa' 
                    unity='m' 
                    set={setMass}
                    var={mass}
                />
                *
                <Input
                    className='acceleration'
                    name='Acel.' 
                    unity='a' 
                    set={setAcceleration}
                    var={acceleration}
                />
            </FormulaBox>
        </LeiNewton2Styled>
    )
}