import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import NativeCurrencyBalance from "../components/NativeCurrencyBalance";
import TokenBalance from "../components/TokenBalance";
import USLibrary from "../components/USLibrary";
import { ALBT_TOKEN_ADDRESS, US_ELECTION_ADDRESS } from "../constants";
import useEagerConnect from "../hooks/useEagerConnect";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const handleButtonClick = () => {
    window.location.href = "/main.tsx";
  };

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>BreachSneach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>BreachSneach</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>Welcome to BreachSneach</h1>

        <button
          title="You must be authenticated"
          onClick={handleButtonClick}
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            borderRadius: "0.25rem",
            border: "none",
            cursor: "pointer",
            marginTop: "2rem",
            boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",
          }}
        >
          Get started
        </button>

        {isConnected && (
          <section>
            <NativeCurrencyBalance />

            <TokenBalance tokenAddress={ALBT_TOKEN_ADDRESS} symbol="ALBT" />
            <USLibrary contractAddress={US_ELECTION_ADDRESS} />
          </section>
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
