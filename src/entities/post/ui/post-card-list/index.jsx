import React, { useEffect, useState } from "react";
import { PostCard } from "../post-card";
import { useGetPostsQuery } from "../../model";

function PostsCardList() {
  const [postStart, setPostStart] = useState(0);
  const [isMyFetchingDown, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  const { data = {}, isLoading } = useGetPostsQuery({
    start: postStart,
  });

  useEffect(() => {
    if (isMyFetchingDown) {
      setPostStart((prev) => {
        return prev < 93 ? prev + 1 : prev;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetchingDown]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop < 100) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      40
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (isLoading) return null;

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsCardList;
