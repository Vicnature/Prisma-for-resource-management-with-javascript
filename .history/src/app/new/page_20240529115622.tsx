import Link from "next/link";

async function createTodo(data:FormData){
    "use server"
    
    console.log("hi")
}
export default function Page(){
    return (
        <div>
        <header className = "flex justify-between mb-4 items-center">
        New
        </header>
        <form  action = "{createTodo} className = "flex gap-2 flex-col">
        <input type   = "text" name  = "title" className = "border border-slate-300 text-slate-300 px-2 py-1 rounded outline:none hover:bg-slate-700 focus-within:bg-slate-700 outline-one" placeholder = "Title"/>
        <div className="flex gap-1 justify-end">
        <Link href = ".." className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline:none hover:bg-slate-700 focus-within:bg-slate-700 outline-one">Cancel</Link>
        <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline:none hover:bg-slate-700 focus-within:bg-slate-700 outline-one">Create</button>
        </div>
            </form>
        </div>
    )
}