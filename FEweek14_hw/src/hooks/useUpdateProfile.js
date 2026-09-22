import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../apis/user';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myPage'] });
    },
  });
};