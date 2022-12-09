import { useEffect } from "react";
import WOW from "wowjs";
import { useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies(['isAccepted']);

  useEffect(() => {

    // Scroll top on navigation
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Animation on navigation
    new WOW.WOW({
      live: false,
    }).init();

    // Cookie 
    if (cookies?.isAccepted !== 'true' && cookies?.isAccepted !== true) {
      document.getElementById("cookiePopup").style.display = "block";
    }

  }, [pathname]);

  return null;
}