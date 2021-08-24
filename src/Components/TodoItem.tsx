import React, {FC, useContext} from 'react'
import {ITodo} from '../types'
import { TouchableOpacity } from 'react-native';
import { Box, Button, Center, HStack, Stack, Text } from 'native-base';
import { maxHeight, width } from 'styled-system';
import Context from '../context'

interface TodoItemProps{
    todo: ITodo
    index: number
}

const TodoItem: FC<TodoItemProps> = ({todo, index}) => { 
    const {removeTodo, toggleTodo} = useContext(Context)

    let classes: string

    if(todo.completed)
        return(
            <HStack 
                space={3} 
                alignItems="center">
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={()=> toggleTodo(todo.id)}>

                    <HStack
                        minWidth='87%'
                        maxWidth='87%'
                        bg='white'
                        p={4}
                        shadow={4}>
                            <Box 
                                marginRight='10px'
                                _text={{
                                    fontSize: 'lg',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    marginY: 'auto',
                                }}>
                                <Text>
                                    {(index+1).toString()}
                                </Text>
                            </Box>     
                        <Box
                            _text={{
                                fontSize: 'lg',
                                color: 'black',
                                marginRight: '15px',

                            }}>
                                <Text
                                    strikeThrough>
                                    {todo.description}
                                </Text>
                        </Box>

                    </HStack>  
                </TouchableOpacity>
                
                <Box 
                    width='12%'
                    marginLeft='-30px'>
                    <Button 
                        size='sm' 
                        colorScheme='danger'
                        onPress={() => removeTodo(todo.id)}
                        _text={{
                            color: 'white',
                        }}>
                        &#215;
                    </Button>
                </Box>
            </HStack> 
        );
    else 
    return(
        <HStack 
            space={3} 
            alignItems="center">
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={()=> toggleTodo(todo.id)}>

                <HStack
                    minWidth='87%'
                    maxWidth='87%'
                    bg='white'
                    p={4}
                    shadow={4}>
                        <Box 
                            marginRight='10px'
                            _text={{
                                fontSize: 'lg',
                                fontWeight: 'bold',
                                color: 'black',
                                marginY: 'auto',
                            }}>
                            <Text>
                                {(index+1).toString()}
                            </Text>
                        </Box>     
                    <Box
                        _text={{
                            fontSize: 'lg',
                            color: 'black',
                            marginRight: '15px',

                        }}>
                            <Text>
                                {todo.description}
                            </Text>
                    </Box>

                </HStack>  
            </TouchableOpacity>
            
            <Box 
                width='12%'
                marginLeft='-30px'>
                <Button 
                    size='sm' 
                    colorScheme='danger'
                    onPress={() => removeTodo(todo.id)}
                    _text={{
                        color: 'white',
                    }}>
                    &#215;
                </Button>
            </Box>
        </HStack> 
    );
   
}

export default TodoItem;