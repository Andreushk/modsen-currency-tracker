import { useEffect } from 'react';

const useDisableBodyScroll = (isDisabled: boolean): void => {
  useEffect(() => {
    isDisabled
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDisabled]);
};

export default useDisableBodyScroll;
