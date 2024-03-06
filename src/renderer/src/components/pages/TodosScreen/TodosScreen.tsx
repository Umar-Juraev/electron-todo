import { FC } from 'react'
import { Todo } from '@renderer/components/templates'

type Props = {

}

const TodosScreen: FC<Props> = ({}): JSX.Element => {
    return (
        <main>
            <h1>Todos</h1>
            <Todo />
        </main>
    )
}

export default TodosScreen