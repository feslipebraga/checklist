import './todo-form-style.css'
import { TextInput } from '../TextInput';
import { Button } from '../Button';

export function ToDoForm({onSubmit}) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput
            placeholder="Digite o item que deseja adicionar"
            required
            name = 'description'
            />
            <Button>Salvar Item</Button>
        </form>
    );
}