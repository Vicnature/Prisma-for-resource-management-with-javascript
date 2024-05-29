import Link from "next/link";

export default function Page(){
    return (
        <div>
        <header className = "flex justify-between mb-4 items-center">
        New
        </header>
        <form  action = "" className = "flex gap-2 flex-col">
        <input type   = "text" name  = "title" className = "border border-slate-300 text-slate-300 px-2 py-1 rounded outline:none hover:bg-slate-700 focus-within:bg-slate-700 outline-one" placeholder = "Title"/>
        <div>
        <Link href></Link>
        </div>
            </form>
        </div>
    )
}