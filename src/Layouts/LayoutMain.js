import Head from "next/head";

const LayoutMain = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </>
  );
};

export default LayoutMain;
