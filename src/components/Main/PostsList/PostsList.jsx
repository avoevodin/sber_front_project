import { useContext } from "react";
import CommentsContextProvider from "../../../contexts/CommentsContext";
import { MainContext } from "../../../contexts/MainContext";
import PostItem from "./PostItem/PostItem";

const PostsList = () => {
    const { posts } = useContext(MainContext);
    return (
        <CommentsContextProvider>
            <ul className="list-group list-group-flush">
                {posts.map((post, index) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        hashtag={post.hashtag}
                        image={post.image}
                        text={post.text}
                        date={post.date}
                        commentsExpanded={post.commentsExpanded}
                        index={index}
                    />
                ))}
            </ul>
        </CommentsContextProvider>
    );
};

export default PostsList;
