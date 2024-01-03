import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props) {
  // console.log("props: ", props);

  return (
    <>
      <Head>
        <title>Écrivain.io</title>
        <meta name="description" content="Le blog communautaire des aficionados de l'écriture des romans." />
        <meta name="keywords" content="blog des romanciers, roman, romancier, écrire un roman, lire un roman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Blog-Next" />
        <meta name="generator" content="Next.js" />
        <meta name="creator" content="Charles-Henri SAINT-MARS" />
        <meta name="publisher" content="Charles-Henri SAINT-MARS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container px-4 pt-5">
        <h1 className="text-center">La liste des utilisateurs</h1>
        <div className="row justify-content-center mt-4">
          {props.users.map((user) => (
            <div key={uuidv4()} className="col-12 col-lg-6 m-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title">{user.username}</h5>
                  <Link
                    className="ml-auto card-link"
                    href={`/users/${user.id}`}
                  >
                    Contacter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}

// https://jsonplaceholder.typicode.com/users
