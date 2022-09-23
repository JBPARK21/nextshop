import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <div className="bg-slate-100 p-2">
          <p className="text-3xl font-bold">NextShop</p>
          <p>Beomju Park</p>
          <p> - TailwindCSS </p>
          <p> - MongoDB </p>
        </div>
      </div>
    </Layout>
  );
}
