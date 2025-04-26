import { Children, createContext, useState } from "react";

const ToDoContext = createContext();
const ToDoProvider = ({ Children}) => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState ('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return(
        <ToDoContext.Provider
        value={{ todos, inputValue, addTodo, handleInputChange}} > {Children}</ToDoContext.Provider>
    );
};
export { ToDoProvider, ToDoContext};