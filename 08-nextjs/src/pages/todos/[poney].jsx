// Crochets OBLIGATOIRES, conne un paramètre à la route
import Layout from "@/components/layouts/layout";

export default function Todo({ data }) {
  return (
    <Layout title="Todo" currentPage="todos">
      <h1 className="text-center text-4xl font-semibold">{data.title}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.poney}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
