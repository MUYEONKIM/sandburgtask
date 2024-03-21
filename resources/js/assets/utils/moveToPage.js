import { useRouter } from 'vue-router';

export function useMoveToPage() {
  const router = useRouter({
    scrollBehavior() {
      return { top: 0 }
    },
  });

  // 페이지 이동 함수
  const moveToPage = (path) => {
    router.push(path);
  };

  return {
    moveToPage,
  };
}