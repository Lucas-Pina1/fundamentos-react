import React from "react";

import Post from "./Post";

// Render -> renderizar
function App() {
  return (
    <>
      <h1>JStacks Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post
        post={{
          title: "Titulo noticia 01",
          subtitle: "Subtitulo da noticia 01",
        }}
      />
    </>
  );
}

export default App;
