import {Container, DeleteButton} from './styles';
import {Item} from '../../types/item';
import { useState } from 'react';

type Props = {
    item: Item,
    onDone: (id: number) => void
    onDelete: (id: number) => void
}

export const ListItem = ({item, onDone, onDelete}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done); 

    const handleDone = () => {
        onDone(item.id);
        setIsChecked(!isChecked);
    }

    return (
        <Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={handleDone}/>
            <label>{item.name}</label>
            <DeleteButton onClick={() => onDelete(item.id)}>🗑️</DeleteButton>
        </Container>
    );
}