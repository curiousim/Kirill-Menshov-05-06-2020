import { useEffect, RefObject } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  action: () => void
) {
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
