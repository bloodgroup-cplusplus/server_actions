
const todos:string[] = ["Meet Chad"];
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
export default function Home() {
  async function addTodo(data:FormData)
  {
    'use server';
    const todo = data.get("todo") as string ; 
    todos.push(todo)
    revalidatePath("/");
  }
  return (
    <main className="p-24">  
    <h1 className='text-4xl font-bold'>Todos</h1>
    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </ul>
    <form action = {addTodo}>
      <input type="text"
      name="todo"
      className='border border-gray-300 rounded-lg py-4 px-4 text-base'/>
      <button type="submit" className='bg-blue-600 disabled:bg-gray-500 inline-flex items center '>
        Add Todo
      </button>

    </form>
    
    </main>

  )
}
