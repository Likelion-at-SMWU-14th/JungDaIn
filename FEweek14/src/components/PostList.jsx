import { usePosts } from "../hooks/usePosts";

function PostList() {
    const { data, isPending } = usePosts();

    if (isPending) return <p>로딩중...</p>;

    return (
        <ul>
            {data?.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;