import Head from "next/head";

const Article = (props) => {

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
        <h1 className="mb-4">{props.currentArticle.title}</h1>
        <p className="fs-3">{props.currentArticle.body}</p>
        <p className="fs-5">Identifiant utilisateur : {props.currentArticle.userId}</p>
      </div>
    </>
  );
};

export default Article;

export async function getStaticProps(context) {
  const id = context.params.articleId; /* récupération de l'endpoint du lien cliqué */

  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const articles = await data.json();

  const currentArticle = articles.posts.find((el) => el.id === Number(id));

  return {
    props: {
      currentArticle
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const articles = await data.json();

  const paths = articles.posts.map((item) => ({
    params: { articleId: item.id.toString() },
    /* articleId correspond au nom du fichier dynamique [articleId].js */
  }));

  return {
    paths,
    fallback: false,
  };
}

// https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json