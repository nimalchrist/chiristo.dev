import { dailyDevUrl } from '@/utils/promotedUrls';
import DailyDevIocn from '../assets/social-icons/dailyDev.svg';
import GithubIcon from '../assets/social-icons/github.svg';
import LinkedInIcon from '../assets/social-icons/linkedin.svg';
import MailToIcon from '../assets/social-icons/mailto.svg';
import XIcon from '../assets/social-icons/twitter.svg';
import { githubUrl, linkedInUrl, mailUrl, twitterUrl as xUrl } from '../utils/authorsUrls';

const linksArray = [
  { href: mailUrl, Icon: MailToIcon, label: 'chiristo.dev@gmail.com' },
  { href: githubUrl, Icon: GithubIcon, label: 'github.com/nimalchrist' },
  { href: linkedInUrl, Icon: LinkedInIcon, label: 'linkedIn.com/in/chiristo_nimal' },
  { href: xUrl, Icon: XIcon, label: 'x.com/chiristoNimal' },
];

const promotedLinksArray = [
  { href: dailyDevUrl, Icon: DailyDevIocn, label: 'daily.dev.com/chiristoNimal' },
];

export function getPersonalLinksData() {
  return linksArray;
}

export function getPromotedLinksData() {
  return promotedLinksArray;
}
