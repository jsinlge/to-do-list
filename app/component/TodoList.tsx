export interface ITask {
  id: string,
  text: string
}

const Task = ({ task, remove_task, index, edit_task }) => {
  return (
  <tr>
  <td>{task}</td>
  <button
  onClick={() => remove_task(index) }
  className='input input-bordered w-full w-full' 
  >
    remove
  </button>
  <button
  onClick={() => edit_task(index) }
  className='input input-bordered w-full w-full' 
  >
    edit task
  </button>
</tr>
);
};


interface TodoListProps {
  tasks: ITask[]
}

const data= {id:1,
todo: "wash table",
}

const TodoList = ({ tasks, remove_task, edit_task }) => {
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
        {tasks.map((task, index) => (
          <Task key={task.id} task= {task} remove_task={remove_task} index={index} edit_task={edit_task}/>
        ))}
      </tbody>
    </table>
  </div>;
};

export default TodoList;