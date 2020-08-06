import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useTodos() {
    const todos = useSelector((state: RootState) => state.todos);
    console.log(todos);
    return todos;
}