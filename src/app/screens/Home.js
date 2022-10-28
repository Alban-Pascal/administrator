import axios from "axios";
import React, { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function Home() {
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://localhost:9999/addStructure");
  //     setStructureName(result.data);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function getPost() {
  //     const response = await client.get("/");
  //     setPost(response.data);
  //   }
  //   getPost();
  // }, []);

  return (
    <div>
      <h2>Partenaires</h2>

      {/* <h1> {post.title}</h1>
      {/*
      <ul>
        {structureName.map((item) => (
          <li key={item.id}>
            <p>{item.structureName}</p>
          </li>
        ))}
      </ul>  */}

      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
            <th scope="col">Actif</th>
            <th scope="col">Inactif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>X</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>Structure</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom du Partenaire </th>
            <th scope="col">Structure</th>
            <th scope="col">Actif</th>
            <th scope="col"> Inactif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Valence</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Paris 1</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Paris 2</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Lyon</td>
            <td>X</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
