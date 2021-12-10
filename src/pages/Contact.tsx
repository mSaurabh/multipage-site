import { useLocation } from "react-router-dom";

interface IContactProps {}

export const Contact = (props: IContactProps) => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(queryParams.get("size"));

  return (
    <div>
      <h2>Hey {name || "there"}, Contact us here ...</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo rem
        numquam aliquam ipsa commodi odit, id sunt voluptate facere provident
        cumque sapiente. Aut, necessitatibus nostrum aliquid pariatur saepe sed
        nihil.
      </p>
    </div>
  );
};
