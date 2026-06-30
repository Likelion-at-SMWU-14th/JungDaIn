import { useEffect, useState } from "react";

function DebouncedSearch() {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어 입력"
      />

      <p>실시간 입력: {keyword}</p>
      <p>1초 뒤 완성: {debouncedKeyword}</p>
    </div>
  );
}

export default DebouncedSearch;