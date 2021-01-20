import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [cookie, setCookie] = useCookies(['darkMode']);
    const [darkMode, setDarkModeState] = useState<boolean>(true);

    const auto = !cookie['darkMode'];

    useEffect(() => {
      if (!window.matchMedia)
        return;

      if (auto)
        setDarkModeState(window.matchMedia('(prefers-color-scheme: dark)').matches);
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
          if (auto)
            setDarkModeState(event.matches);
        });
    });

    function setDarkMode(val: boolean | 'auto') {
      if (val == 'auto') {
        setCookie('darkMode', undefined);
        return;
      }

      setCookie('darkMode', val);
      setDarkModeState(val);
    }

    useEffect(() => {
      if (cookie['darkMode'])
        setDarkMode(cookie['darkMode'] == 'true');
    }, []);

    return [darkMode, setDarkMode] as const;
  }
;

export default useDarkMode;