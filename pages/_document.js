import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="id" className="light">
        <Head />

        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />

        <meta content="u8olGi9rN_mzUhMWIqakLvCi-pQMluERfdUK_6bC4x4" name="google-site-verification" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-25065548-9" />

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

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                if (newTheme === 'dark') {
                  document.documentElement.classList.add('dark')
                  document.documentElement.classList.remove('light')
                } else {
                  document.documentElement.classList.remove('dark')
                  document.documentElement.classList.add('light')
                }
                window.__onThemeChange(newTheme);
              }
              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
              darkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light')
              });
              setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
            })();
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument