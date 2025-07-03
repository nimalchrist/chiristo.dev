import { useCallback, useState } from 'react';

export default function useLoadingError() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // helpers
  const startLoading = useCallback(() => {
    setError(null);
    setLoading(true);
  }, []);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const failedWith = useCallback((msg: string) => {
    setError(msg);
    setLoading(false);
  }, []);

  const reset = useCallback(() => {
    setError(null);
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    setLoading,
    setError,
    startLoading,
    finishLoading,
    failedWith,
    reset,
  } as const;
}
