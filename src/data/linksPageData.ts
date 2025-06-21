import GithubIcon from "../assets/social-icons/github.svg";
import LinkedInIcon from "../assets/social-icons/linkedin.svg";
import MailToIcon from "../assets/social-icons/mailto.svg";
import { githubUrl, linkedInUrl, mailUrl, twitterUrl as xUrl } from "../utils/linksPageUtils/authorsUrls";
import XIcon from "../assets/social-icons/twitter.svg";

const linksArray = [
    { href: mailUrl, Icon: MailToIcon, label: "chiristo.dev@gmail.com" },
    { href: githubUrl, Icon: GithubIcon, label: "github.com/nimalchrist" },
    { href: linkedInUrl, Icon: LinkedInIcon, label: "linkedIn.com/in/chiristo_nimal" },
    { href: xUrl, Icon: XIcon, label: "x.com/chiristoNimal" },
]

const promotedLinksArray = [
    { href: xUrl, Icon: XIcon, label: "x.com/chiristoNimal" },
]

export function getPersonalLinksData() {
    return linksArray
}

export function getPromotedLinksData() {
    return promotedLinksArray
}