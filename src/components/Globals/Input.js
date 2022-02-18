import styled from "styled-components";

const InputStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 75px;
    input{
        border: none;
        border-bottom: 1px solid #757575;
        border-radius: 2px;
        display: block;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        width: 100%;
    }
    input:focus{
        outline: none;
    }
    label{
        color: #999;
        font-size: 18px;
        left: 5px;
        pointer-events: none;
        position: absolute;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    input:focus ~ label,
    input:valid ~ label{
        color: white;
        font-size: 14px;
        top: -20px;
    }
    .bar{
        display: block;
        position: relative;
        width: 100%;
    }
    .bar:before,
    .bar:after{
        background: grey;
        bottom: 1px;
        content: '';
        height: 2px;
        position: absolute;
        transition: 0.2s ease all;
        width: 0;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    .bar:before{
        left: 50%;
    }
    .bar:after{
        right: 50%;
    }
    input:focus ~ .bar:before,
    input:focus ~ .bar:after{
        width: 50%;
    }
    .highlight{
        height: 60%;
        left: 0;
        opacity: 0.5;
        pointer-events: none;
        position: absolute;
        top: 25%;
        width: 100px;
    }
    input:focus ~ .highlight{
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }
    @-webkit-keyframes inputHighlighter{
        from { background: #4285f4; }
        to   { width: 0; background: transparent; }
    }
    @-moz-keyframes inputHighlighter{
        from { background: #4285f4; }
        to   { width: 0; background: transparent; }
    }
    @keyframes inputHighlighter{
        from { background: #4285f4; }
        to   { width: 0; background: transparent; }
    }
`

export default function Input(props){
    return(
        <InputStyled>
            <input 
                className={props.className} 
                type="text" 
                onChange={(event) => {
                    props.set(event.target.value);
                }}
                required 
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{props.name}</label>
        </InputStyled>
    )
}