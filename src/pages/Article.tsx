import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { iArticle } from "./pagesInterfaces";

interface ArticleProps {}

const Article = (props: ArticleProps) => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const {
    isPending,
    data: article,
    error,
  }: {
    isPending: boolean;
    data: iArticle | undefined;
    error: string;
  } = useFetch(url);
  const history = useNavigate();

  React.useEffect(() => {
    if (error) {
      // redirect
      setTimeout(() => history("/"), 2000);
    }
  }, [error, history]);

  return (
    <div className="article">
      {isPending && <div>Loading article detail...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          {/* @ts-ignore */}
          <h2>{article.title}</h2>
          {/* @ts-ignore */}
          <p>By {article.author}</p>
          {/* @ts-ignore */}
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
