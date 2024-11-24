import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-red-500 underline text-3xl text-center">
        Home Page{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et
        voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum
        recusandae quas! Possimus eaque mollitia enim iste neque placeat omnis
        veritatis.
      </p>

      <ul className="flex justify-center items-center gap-10 text-2xl pb-10 text-green-500">
        <li>
          <Link to="/govtJob">Govt Job</Link>
        </li>
        <li>
          <Link to="/privetJob">Privet Job</Link>
        </li>
        <li>
          <Link to="/teacherjob">Teacher Job</Link>
        </li>
        <li>
          <Link to="/itJob">IT Job</Link>
        </li>
      </ul>
    </div>
  )
};

export default Home;