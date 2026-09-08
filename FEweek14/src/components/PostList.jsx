import { usePosts } from "../hooks/usePosts";

function PostList() {
    const { data } = usePosts();

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;