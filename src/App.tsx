import {useState} from 'react';
import {Area, Container, Header} from './App.styles';
import {Item} from './types/item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Estudar o dia todo', done: false},
        {id: 2, name: 'Procrastinar o dia todo', done: false}
    ]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });
        setList(newList);
    }

    const handleChangeDone = (id: number) => {
        let newList = [...list];
        newList.map((item) => item.id === id ? item.done = !item.done : item.done = item.done);
        setList(newList);
    }

    const handleDeleteTask = (id: number) => {
        let newList = [...list];
        newList = newList.filter((item) => item.id !== id);
        setList(newList);
    }

    return (
        <Container>
            <Area>
                <Header>Lista de Tarefas</Header>

                <AddArea onEnter={handleAddTask} />

                {list.map((item, index) => (
                    <ListItem key={index} item={item} onDone={handleChangeDone} onDelete={handleDeleteTask}/>
                ))}
            </Area>
        </Container>
    );
}

export default App;