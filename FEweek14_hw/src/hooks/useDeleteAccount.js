import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAccount } from '../apis/user';

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      alert('성공적으로 삭제되었습니다');
      queryClient.invalidateQueries({ queryKey: ['myPage'] });
    },
  });
};