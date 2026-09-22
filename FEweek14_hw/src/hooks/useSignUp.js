import { useMutation } from '@tanstack/react-query';
import { signUp } from '../apis/user';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      alert('환영합니다');
    },
  });
};