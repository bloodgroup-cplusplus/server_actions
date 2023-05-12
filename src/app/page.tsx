
const todos:string[] = ["Meet Chad"];
import Image from 'next/image'
export default function Home() {
  return (
    <main className="p-24">  
    <h1 className='text-4xl font-bold'>Todos</h1>
    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </ul>
    <form>
      <input type="text"
      name="todo"
      className='border border-gray-300 rounded-lg py-4 px-4 text-base'/>

    </form>
    
    </main>

  )
}
