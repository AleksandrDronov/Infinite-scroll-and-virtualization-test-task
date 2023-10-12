import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/ui/button/button";
import { useGetPostByIdQuery } from "../../entities/post/model";
import styles from "./styles.module.css";

function PostPage() {
  const { id } = useParams();
  const { data: post, isSuccess, isLoading } = useGetPostByIdQuery(id);
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(-1);
  };

  if (isLoading) return null;
  if (!isSuccess) return "Страница не существует";

  return (
    <main className={styles.container}>
      <h1 className={styles.post_id}>№ {post.id}</h1>
      <h2 className={styles.title}>{post.title}</h2>
      <p>{post.body}</p>
      <Button onClick={buttonHandler}>Назад</Button>
    </main>
  );
}

export default PostPage;
