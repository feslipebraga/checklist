import { useRef, useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { ToDoForm } from "./components/ToDoForm"

// const todos = [
//   // {
//   //   id: 1,
//   //   description: "JSX e componentes",
//   //   completed: false,
//   //   createdAt: "2022-10-31"
//   // },
//   // {
//   //   id: 2,
//   //   description: "Props, state e hooks",
//   //   completed: false,
//   //   createdAt: "2022-10-31"
//   // },
//   // {
//   //   id: 3,
//   //   description: "Ciclo de vida dos componentes",
//   //   completed: false,
//   //   createdAt: "2022-10-31"
//   // },
//   // {
//   //   id: 4,
//   //   description: "Testes unitários com Jest",
//   //   completed: false,
//   //   createdAt: "2022-10-31"
//   // }
// ]
// const completed = [
//   // {
//   //   id: 5,
//   //   description: "Controle de inputs e formulários controlados",
//   //   completed: true,
//   //   createdAt: "2022-10-31"
//   // },
//   // {
//   //   id: 6,
//   //   description: "Rotas dinâmicas",
//   //   completed: true,
//   //   createdAt: "2022-10-31"
//   // }
// ]

function App() {

  // Estado para controlar a exibição do diálogo de adicionar tarefa
  const [showDialog, setShowDialog] = useState(false);

  // Função para alternar a exibição do diálogo de adicionar tarefa
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  }

  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([]);
  
  // Função para adicionar uma nova tarefa ao array todos
  const addToDo = (formData) => {
    // Obtém a descrição da nova tarefa a partir dos dados do formulário
    const description = formData.get('description');
    // Atualiza o estado do array de tarefas com a nova tarefa
    setTodos((prevState) => {
      const newToDo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString()
      }
      return [...prevState, newToDo]
    })
    toggleDialog()
  }

  // Função para alternar o status de conclusão de uma tarefa
  const toggleToDoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t, 
            completed: !t.completed
          }
        }
        return t
      })
    })
  }

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id)
    })
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <Dialog />
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter((t) => !t.completed).map((t) =>
            <ToDoItem key={t.id} item={t} onToggleCompleted={toggleToDoCompleted} onDeleteTodo={deleteTodo}/>
            )}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter((t) => t.completed).map((t) =>
              <ToDoItem key={t.id} item={t} onToggleCompleted={toggleToDoCompleted} onDeleteTodo={deleteTodo}/>
            )}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={addToDo} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main >
  )
}

export default App;