import {API_DOMAIN} from '../constants';

import {memo} from 'react';
import {Twitter, GitHub, Instagram, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="localhost:3000"
          rel="noopener noreferrer"
        >
          covid19Fact
        </a>
      </div>

      {/* <h5>{t('We stand with everyone fighting on the frontlines')}</h5> */}

      {/* <div className="links">
        <a
          href="https://github.com/covid19india/covid19india-react"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href={API_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="https://t.me/covid19indiaorg"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        <a
          href="https://twitter.com/covid19indiaorg"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="https://instagram.com/covid19indiaorg"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a>

        <a
          href="mailto:hello@covid19india.org"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div> */}
    </footer>
  );
}

export default memo(Footer);
