import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import Button from "../../../../shared/ui/button/button";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(`${post.id}`);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.post_id} >№ {post.id}</h2>
      <h3 className={styles.title}>{post.title}</h3>
      <p className="postitem__body">
        {post.body.length > 50 ? post.body.substring(0, 50) + "..." : post.body}
      </p>
      <Button onClick={buttonHandler}>
        Просмотр
      </Button>
    </div>
  );
};
