import { useCallback } from 'react';

function FloatingButton() {
  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fixed bottom-12 right-[15%] z-50">
      <button
        type="button"
        onClick={goToTop}
        className="px-4 py-2 text-sm md:text-base bg-gray-400 text-white hover:bg-red-700 rounded-md shadow-lg hover:shadow-xl transition-colors duration-300"
      >
        Top
      </button>
    </div>
  );
}

export default FloatingButton;
