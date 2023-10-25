export interface ITask {
  id: string,
  text: string
}

interface TodoListProps {
  tasks: ITask[]
}

const data= {id:1,
todo: "wash table",
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={tasks.id}>
            <td>{tasks.text}</td>
            <td>Blue</td>
          </tr>
        ))}

      </tbody>
    </table>
  </div>;
};

export default TodoList;