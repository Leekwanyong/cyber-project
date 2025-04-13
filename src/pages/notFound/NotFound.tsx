import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <Link to="/" className="text-blue-500">
        홈으로 돌아가기
      </Link>
      <h1 className="text-2xl font-bold">404 Not Found</h1>
      <p className="text-gray-500">찾을 수 없는 페이지입니다.</p>
    </div>
  );
}

export default NotFound;
