import React, { ReactElement } from "react";
//----- IMPORTS
import { Container, TextInput, MaskTextInput } from './styles'
//----- INTERFACE
interface propsInput{
    width?: string
    icon: ReactElement | false
    placeholder: string
    mask?: boolean
    value: string
    type?: any
    options?: any
    onChangeText: (text: string) => void    
}





const Input: React.FC<propsInput> = ({ width, icon, placeholder, mask, value, type, options, onChangeText }) => {
    return(
        <Container width={width} >
            {icon && icon}
            {mask
                ? <MaskTextInput value={value} type={type} options={options} onChangeText={(text) => onChangeText(text)} placeholder={placeholder} />            
                : <TextInput value={value} onChangeText={(text) => onChangeText(text)} placeholder={placeholder} />            
            }
            
        </Container>
    )
}

export default Input; 
