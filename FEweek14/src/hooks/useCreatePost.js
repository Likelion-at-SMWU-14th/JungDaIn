import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createPost } from '../api/posts'

export const useCreatePost = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            console.log('데이터 변경 성공')
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
    })
}