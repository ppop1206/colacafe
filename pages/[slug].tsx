// @ts-ignore
import fetchMeta from "fetch-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { domain } from "../domain";

export async function getServerSideProps(context: any) {
  const data = await fetchMeta(domain + "/" + context.params.slug);
  return {
    props: data,
  };
}

export default function App({ url, title, description, icon, image }: any) {
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect");
    router.replace(url);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon} />
      </Head>
    </>
  );
}
