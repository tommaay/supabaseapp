import type { NextPage } from "next";
import PageLayout from "components/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-5xl">Supabase App</h1>
      </main>
    </PageLayout>
  );
};

export default Home;
