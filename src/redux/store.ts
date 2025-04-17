// 실제 스토어 구현은 src/store/wishlistStore.ts에 있습니다.
// 이 파일은 빌드 오류를 해결하기 위한 파일입니다.
import useWishlistStore from '../store/wishlistStore';

// 스토어 내보내기
export { useWishlistStore };

// 기본 내보내기
const store = { useWishlistStore };
export default store;
