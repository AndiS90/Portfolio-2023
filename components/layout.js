import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import { Libre_Caslon_Display, Libre_Caslon_Text, Quicksand } from 'next/font/google';

const libreCaslonDisplay = Libre_Caslon_Display({ 
  subsets: ['latin'],
  variable: '--font-LCD' });

const libreCaslonText = Libre_Caslon_Text({
  weight:[ '400','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-LCT'
});

const quicksand = Quicksand({
  weight:['300', '400','600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-Qs'
});

export const siteTitle = 'Strickland, Andrea: Portfolio';

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andrea Strickland's modernized 2023 portfolio."
        />
        <meta
          property="og:image"
          content={`/images/profile.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <style jsx global>{`
        html {
          --font-LCD: ${libreCaslonDisplay.style.fontFamily};
          --font-LCT: ${libreCaslonText.style.fontFamily};
          --font-Qs: ${quicksand.style.fontFamily};
        }
      `}</style>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerLogoContainer}>
          <link href="/" className={styles.headerLogo}></link>
        </div>
        <div className={styles.headerNav}>
          <nav className={styles.slideMenu}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/">About</Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/projects/front-end">Front-End Projects</Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/projects/full-stack">Full-Stack Projects</Link>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
      <div className={styles.footerLogoContainer}>
          <Link href="/" className={styles.footerLogo}></Link>
      </div>
      <div className={styles.footerSocialContainer}>
        <ul className={styles.footerSocials}>
            <li className={styles.footerSocial}>
              <a href="mailto: andrea.strickland1990@gmail.com" target="_blank" rel="noreferrer"><Image
                priority
                src="/images/mail-icon-white.png"
                className={styles.socialIcon}
                height={32}
                width={32}
                alt="email-icon"
              /></a>
            </li>
            <li className={styles.footerSocial}>
              <a href="https://github.com/AndiS90" target="_blank" rel="noreferrer"><Image
                priority
                src="/images/github-thick-icon-white.png"
                className={styles.socialIcon}
                height={32}
                width={32}
                alt="github-icon"
              /></a>
            </li>
            <li className={styles.footerSocial}>
              <a href="https://www.linkedin.com/in/andrea-strickland-1990/" target="_blank" rel="noreferrer"><Image
                priority
                src="/images/linkedin-thick-icon-white-removebg.png"
                className={styles.socialIcon}
                height={32}
                width={32}
                alt="linkedin-icon"
              /></a>
            </li>
            <li className={styles.footerSocial}>
              <a href="https://twitter.com/GiftofHindsight" target="_blank" rel="noreferrer"><Image
                priority
                src="/images/Twitter-X-White-Logo-PNG.png"
                className={styles.socialIcon}
                height={32}
                width={32}
                alt="twitter-x-icon"
              /></a>
            </li>
            <li className={styles.footerSocial}>
              <a href="tel:+19035789267" target="_blank" rel="noreferrer"><Image
                priority
                src="/images/phone-icon-white.png"
                className={styles.socialIcon}
                height={32}
                width={32}
                alt="phone-icon"
              /></a>
            </li>
    
          </ul>
        </div>
      </footer>
    </div>
  );
}