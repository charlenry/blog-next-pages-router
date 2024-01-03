import Head from "next/head";

export default function User(props) {
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
      <div className="container px-4 pt-3">
        <h1 className="text-center mb-4">
          {`Nom d'utilisateur : ${props.user.username}`}
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="card p-2">
              <div className="card-body">
                <h4 className="card-title">{props.user.name}</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Username: {props.user.username}
                  </li>
                  <li className="list-group-item">Email: {props.user.email}</li>
                  <li className="list-group-item">
                    Site web: {props.user.website}
                  </li>
                  <li className="list-group-item">
                    Téléphone: {props.user.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const id =
    context.params.user; /* récupération de l'endpoint du lien cliqué */

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
    /* user correspond au nom du fichier dynamique [user].js */
  }));

  return {
    paths,
    fallback: false,
  };
}

// https://jsonplaceholder.typicode.com/users