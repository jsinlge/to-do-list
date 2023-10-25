export interface ITask {
  id: string,
  text: string
}

const Task = ({ task }) => {
  return (
  <tr key={task.id}>
  <td>{task .text}</td>
  <td>Blue</td>
</tr>
);
};


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
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task= {task} />
        ))}
      </tbody>
    </table>
  </div>;
};

export default TodoList;