import { useQuery } from '@tanstack/react-query';
import { getMyPage } from '../apis/user';

export const useMyPage = (userId) => {
  return useQuery({
    queryKey: ['myPage', userId],
    queryFn: () => getMyPage(userId),
    staleTime: 30 * 1000,
    retry: 3,
  });
};