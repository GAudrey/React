import Layout from "@/components/layouts/layout";
import Link from "next/link";

export default function Todos({ data }) {
  return (
    <Layout title="Todos" currentPage="todos">
      <h1 className="text-4xl">Tractodos</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <Link
              className="py-3 block text-blue-500"
              href={`/todos/${todo.id}`}
            >
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
