import Head from "next/head";

type PageLayoutProps = {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactElement;
};

export default function PageLayout({
  title,
  keywords,
  description,
  children,
}: PageLayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </>
  );
}

PageLayout.defaultProps = {
  title: "Supbaseapp",
  description: "This app is being built to learn about Supabase",
  keywords: "",
};
