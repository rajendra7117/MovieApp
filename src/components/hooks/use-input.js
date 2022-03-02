import {useState} from "react";

const useInput = (validateInput) =>{

    const [value, setValue] = useState('')
    const [inputBlur, setInputBlur] = useState(false)

    const onChangeValue = e =>{
        setValue(e.target.value)

    }

    const onBlurHandler = e => {
        setInputBlur(true)
    }

    let isTouched =false;
    if(inputBlur){
    isTouched = inputBlur
    }
    let valueError = false
    valueError = validateInput(value)
    
        let hasError = false
    if(isTouched && !valueError){
        
        hasError = true
    }

    return{
        value, hasError, onChangeValue, onBlurHandler
    }

}

export default useInput;