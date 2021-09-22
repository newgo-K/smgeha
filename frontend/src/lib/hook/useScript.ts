import { useEffect, useState } from 'react';

function useScript(url: string) {
  const [loaded, setLoaded] = useState<any>(null);

  useEffect(() => {
    let script: any = null;

    script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => setLoaded(true);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return loaded;
}

export default useScript;
