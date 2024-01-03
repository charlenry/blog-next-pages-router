import Head from "next/head";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Blog = (props) => {
  // console.log(props);

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
      <div className="container px-4 py-5">
        <h1 className="text-center">Bienvenue sur le Blog</h1>
        <p className="text-center fs-4">Voici les articles</p>
        <div className="row g-3 mt-4">
          {props.articles.map(article => (
            <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
              <div className={`card h-100 shadow-sm ${styles.hoverShadow}`}>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-truncate">{article.body}</p>
                  <Link href={`/blog/${article.id.toString()}`} className="card-link">Lire cet article</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const articles = await data.json();

  return {
    props: {
      articles: articles.posts
    }
  }
}


// https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json


