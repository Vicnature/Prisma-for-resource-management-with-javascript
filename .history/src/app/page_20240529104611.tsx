import Link from "next/link"

export default function Home(){
  return (
    <header className = "text-2xl">
      <div>
    <h1 className="text-2xl">Todos</h1>
    <Link href="/new">New</Link>
    </div>
    </header>
    <ul></ul>
    );
}