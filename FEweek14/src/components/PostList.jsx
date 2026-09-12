import { usePosts } from "../hooks/usePosts";

function PostList() {
    const { data, isPending, isError } = usePosts();

    if (isPending) return <p>로딩중...</p>;
    if (isError) return <p>에러가 발생했습니다</p>;

    return (
        <ul>
            {data?.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;