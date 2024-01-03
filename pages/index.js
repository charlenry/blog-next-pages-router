// import styles from "@/styles/Home.module.css";
// import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <h1 className="text-center">Bienvenue sur Écrivain.io</h1>
        <p className="text-center fs-4">
          {"Le blog communautaire des aficionados de l'écriture des romans."}
        </p>

        <div className="row mt-5 gy-3">
          <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">Lisez les articles</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Maximisez votre culture des romans
                </h6>
                <p>Chaque auteur tente de vous apporter le plus de valeur possible par article</p>
                <Link href="/blog">Visitez le blog</Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">Faites un tour vers la liste de membres</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Rencontrez des romanciers
                </h6>
                <p>Ajouter, invitez et discutez avec les différents membres</p>
                <Link href="/users">Découvrez la liste de membres</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
