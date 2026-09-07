import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa6";

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/MarciHomes/" },
  { name: "Instagram", href: "https://www.instagram.com/marcimetzger_theridge/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/marci-metzger-30642496/" },
  { name: "Yelp", href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" },
] as const;

export function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "Facebook":
      return <FaFacebook size={18} />;
    case "Instagram":
      return <FaInstagram size={18} />;
    case "LinkedIn":
      return <FaLinkedin size={18} />;
    default:
      return <FaYelp size={18} />;
  }
}
