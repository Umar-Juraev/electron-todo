import { useTodoStore } from '@renderer/store';
import { FC } from 'react'



type Props = {

}

const Todo: FC<Props> = ({ }): JSX.Element => {
  const { addTodo } = useTodoStore();

  const handleAddTodo = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // addTodo(event.target);

    console.log(event);

  };
  return (
    <></>
  )
}

export default Todo
