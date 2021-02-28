import React, { useEffect, useState } from "react";
import marked from "marked";

const blogpostsFolder = "contents/blogposts/";

export default function BlogPosts(props) {
  const [postFileNames, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetch(blogpostsFolder + "index.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  if (currentPost) {
    return <Post fileName={currentPost} setCurrentPost={setCurrentPost} />;
  } else {
    return (
      <div className="blog">
        <h2>Blog</h2>
        <div className="posts">
          {postFileNames.map((post, index) => {
            return (
              <PostTile
                key={index}
                fileName={post}
                setCurrentPost={setCurrentPost}
              />
            );
          })}
        </div>
      </div>
    );
  }
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
    <div
      className="post-tile"
      onClick={() => props.setCurrentPost(props.fileName)}
    >
      <img src={post.thumbnail} alt="thumbnail" />
      <div className="details">
        <div className="title">{post.title}</div>
        <div className="date">{new Date(post.date).toDateString()}</div>
      </div>
    </div>
  );
}

function Post(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!post) {
      fetch(blogpostsFolder + props.fileName)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
        });
    }
  }, [props.fileName, post]);

  return (
    post && (
      <div className="post">
        <a onClick={() => props.setCurrentPost(null)} href="##">
          BACK
        </a>
        <h2>{post.title}</h2>
        <img src={post.thumbnail} alt="thumbnail" />
        <article
          dangerouslySetInnerHTML={{ __html: marked(post.body) }}
        ></article>
      </div>
    )
  );
}
