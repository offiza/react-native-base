import React, {FC, useState} from 'react'
import { Alert } from 'react-native';
import { Input, Box, HStack, Button } from 'native-base';

interface AddTodoProps{
    onSubmit: (description: string) => void,
}

export const AddTodo: FC<AddTodoProps>  = ({onSubmit}) =>{
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }else{
            Alert.alert('Enter todo')
        }
    }

    return(
        <HStack space={1}>
        
            <Input 
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='todo'
                width='75%'
            ></Input>
            <Button
                colorScheme='green'
                onPress={pressHandler}
                width='25%'
                >
                Add 
            </Button>
        </HStack>
    );
}

