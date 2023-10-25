import Image from 'next/image'
import AddTask from './component/AddTask';
import TodoList from './component/TodoList';

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto  mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-center text-2xl font-bold'>Todo list App</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
}
