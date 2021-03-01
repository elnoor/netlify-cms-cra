import React, { useEffect, useState } from "react";
import marked from "marked";

const blogpostsFolder = "contents/blogposts/";

export default function BlogPosts() {
  const [postFileNames, setPostFileNames] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetch(blogpostsFolder + "index.json")
      .then((response) => response.json())
      .then((data) => {
        setPostFileNames(data);
      });
  }, []);

  if (currentPost) {
    return (
      <Post post={currentPost} clearCurrentPost={() => setCurrentPost(null)} />
    );
  } else if (postFileNames && postFileNames.length > 0) {
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
  } else {
    return <p>No posts found</p>;
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
    <div className="post-tile" onClick={() => props.setCurrentPost(post)}>
      <img src={post.thumbnail} alt="thumbnail" />
      <div className="details">
        <div className="title">{post.title}</div>
        <div className="date">{new Date(post.date).toDateString()}</div>
      </div>
    </div>
  );
}

export function Post(props) {
  const { post } = props;
  return (
    post && (
      <div className="post">
        <button onClick={props.clearCurrentPost}>
          BACK
        </button>
        <h2>{post.title}</h2>
        <img src={post.thumbnail} alt="thumbnail" className="thumbnail" />
        <article
          dangerouslySetInnerHTML={{ __html: marked(post.body) }}
        ></article>
      </div>
    )
  );
}
