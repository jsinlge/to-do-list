'use client'
import React from 'react';
import Image from 'next/image'
import AddTask from './component/AddTask';
import TodoList from './component/TodoList';
import Modal from './component/Modal';
import modalOpen from './component/Modal';
import setModalOpen from './component/Modal';
import handleSubmitNewTodo from './component/Modal';
import newTaskValue from './component/Modal'



const Home = () => {
const [tasks, setTasks] = React.useState([]);
  const remove_task = (index) => {
    console.log(index)
    let i = 0
    let new_array = []
    while ( i < tasks.length ){
      if (i != index) {
        new_array.push(tasks[index])
      }
      i++
    }
    console.log(new_array)
    setTasks(new_array)
  }
  const edit_task = (index) => {
    let i = 0
    while ( i < tasks.length ){
      if (i == index) {
        tasks[index] = ""
      }
    }
    console.log(tasks)
    setTasks(tasks)
  }
  return (
    <main className='max-w-4xl mx-auto  mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-center text-2xl font-bold'>Todo list App</h1>
        <AddTask tasks={tasks} settask={setTasks} />
      </div>
      <TodoList tasks={tasks} remove_task={remove_task} edit_task={edit_task}/>
    </main>
  );
}

export default Home