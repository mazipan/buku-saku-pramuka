import Head from 'next/head';

import Header from './HeaderSection';
import Footer from './FooterSection';
import { BASE_PATH } from '../constants';

const title = 'Buku Saku Pramuka Digital';
const desc =
  'Buku saku pramuka digital dalam bentuk web, ✅ GRATIS, ✅ tanpa iklan, ❌ tidak perlu install Aplikasi lagi';
const url = BASE_PATH;
const metaImg = BASE_PATH + '/assets/5930.jpg';
const authorName =  'Irfan Maulana';

function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="theme-color" content="#7B341E" />
        <title key="title">{title}</title>
        
        <meta name="author" content={authorName} />  
        <meta key="description" name="description" content={desc} />
        <meta name="keywords" content="Pramuka, Buku Saku, Buku Saku Digital" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaImg} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:site" content="@Maz_Ipan" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={desc}
        />

        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={desc} />
        <meta key="og:url" property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImg} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${url}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${url}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${url}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${url}/site.webmanifest`} />
        <meta
          content="u8olGi9rN_mzUhMWIqakLvCi-pQMluERfdUK_6bC4x4"
          name="google-site-verification"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-25065548-9"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
						gtag('config', 'UA-25065548-9');
        `,
          }}
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-4xl p-4 mx-auto">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
