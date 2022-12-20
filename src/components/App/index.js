import React, { useState, createContext } from "react";

import Post from "../Post";
import Header from "../Header";
import Title from "../Title";

import { ThemeProvider } from "../../context/ThemeContext";

// Render -> renderizar
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Ttle#01", subtitle: "Sub#01", likes: 20 },
    { id: Math.random(), title: "Ttle#02", subtitle: "Sub#02", likes: 10 },
    { id: Math.random(), title: "Ttle#03", subtitle: "Sub#03", likes: 50 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title0${prevState.length + 1}`,
        subtitle: `Sub0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== post.id));
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
