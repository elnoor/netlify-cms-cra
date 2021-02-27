import React, { useEffect, useState } from "react";

const blogpostsFolder = "contents/blogposts/";

export default function BlogPosts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(blogpostsFolder + "index.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="posts">
        {posts.map((post, index) => {
          return <PostTile key={index} fileName={post} />;
        })}
      </div>
    </div>
  );
}

function PostTile(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(blogpostsFolder + props.fileName)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [props.fileName]);

  return (
    <div className="post">
      <img src={post.thumbnail} alt="thumbnail"/>
      {/* <img src="contents/_uploads/2.png" alt="thumbnail" /> */}

      <h3>{post.title}</h3>
      <small>{new Date(post.date).toDateString()}</small>
    </div>
  );
}
