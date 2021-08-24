import React, {FC} from 'react'
import { ITodo } from '../types';
import TodoItem from './TodoItem'
import { VStack } from 'native-base';

interface TodoListProps{
    todos: ITodo[],
}

const TodoList: FC<TodoListProps> = ({todos}) => {
    
    return(
        <VStack 
            space={2} 
            alignItems="center"
            marginY='20px'>
            {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index}></TodoItem>)}
        </VStack>    
    );
}

export default TodoList