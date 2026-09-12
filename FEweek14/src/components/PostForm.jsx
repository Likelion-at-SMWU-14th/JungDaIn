import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";

function PostForm() {
    const [title, setTitle] = useState("");
    const { mutate } = useCreatePost();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        mutate({ title, body: "내용 없음", userId: 1 });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목 입력"
            />
            <button type="submit">
                등록
            </button>
        </form>
    );
}
export default PostForm;