import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";
import { iArticle } from "./pagesInterfaces";

interface IHomeProps {}

export const Home = (props: IHomeProps) => {
  const {
    data: articles,
    isPending,
    error,
  }: {
    data: iArticle[] | undefined;
    isPending: boolean;
    error: string;
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading articles...</div>}
      {error && <div>{error}</div>}
      {articles &&
        //   @ts-ignore
        articles.map((article: iArticle) => (
          <div className="card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read More...</Link>
          </div>
        ))}
    </div>
  );
};
