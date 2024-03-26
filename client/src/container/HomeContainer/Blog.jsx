import React from "react";
import styles from "../../styles/Home/Blog.module.css";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project1,
      url: "#",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project2,
      url: "#",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project3,
      url: "#",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project1,
      url: "#",
    },
    {
      id: 5,
      title: "Blog Post 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project2,
      url: "#",
    },
    {
      id: 6,
      title: "Blog Post 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: project3,
      url: "#",
    },
  ];

  const shuffledBlogPosts = blogPosts.sort(() => Math.random() - 0.5);

  return (
    <section className={styles.blog} id="blog">
      <div className="container">
        <h2 className={styles.blogTitle}>Blog</h2>
        <div className={styles.blogPosts}>
          {shuffledBlogPosts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.blogImage}
              />
              <a href={post.url} className={styles.blogPostTitle}>
                {post.title}
              </a>
              <p className={styles.blogPostContent}> {post.content} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
