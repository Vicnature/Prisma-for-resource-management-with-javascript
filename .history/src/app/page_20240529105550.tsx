import Link     from "next/link"
import {prisma} from "@/db"
export default async function Home(){
  return (
   <div>
    <header className = "flex justify-between mb-4 items-center">
    <h1     className = "text-2xl">Todos</h1>
    <Link  className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-one" href= "/new">New</Link>
    </header>
    <ul className = "pl-4">
      {todos.map(todo=>)}
    </ul>
    </div>
    );
}