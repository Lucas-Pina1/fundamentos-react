import React from "react";

import Post from "./Post";
import Header from "./Header";

// Render -> renderizar
function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        post={{
          title: "Titulo noticia 01",
          subtitle: "Subtitulo da noticia 01",
        }}
      />

      <Post
        post={{
          title: "Titulo noticia 02",
          subtitle: "Subtitulo da noticia 02",
        }}
      />

      <Post
        post={{
          title: "Titulo noticia 03",
          subtitle: "Subtitulo da noticia 03",
        }}
      />
    </>
  );
}

export default App;
