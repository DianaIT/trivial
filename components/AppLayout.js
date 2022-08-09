import Head from "next/head";

export default function AppLayout({ children }) {
  return (
    <>
      <section>
        <Head>
          <title>Trivial Luimelia 🥐</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1>TRIVIAL 🥐</h1>
          <img src="/images/logo.png" width="70%" />
        </header>
        {children}
      </section>
      <style jsx>{`
      body {
      
      }
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          align-content: center;
          background-color: #276c7f;
          width: 60vh;
          color: white;
          margin: -1px 0 0 0;
          padding-bottom: 40px;
        }

        h1 {
          font-size: 2.6rem;
          margin-bottom: 0;
        }
        section {
          width: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: -1px auto;
          min-width: 30vh;
          max-width: 60vh;
          padding: 0 2rem;
          border-radius: 10px;
          
        }

        @media (min-width: 520px) {
          section {
            margin: 2rem auto;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding-bottom: 3rem;
          }

          header {
            border-radius: 10px 10px 0 0;
          }
        }
      `}</style>
    </>
  );
}
