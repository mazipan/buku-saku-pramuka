import Layout from '../components/MainLayout'
import Head from 'next/head'
import { reportCoreWebVitals, ReportCoreWebVitalsParams } from '../utils/index'

function AboutPage() {
  return (
    <Layout>
      <>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@graph': [
                  {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Buku Saku Pramuka',
                        item: 'https://buku-saku-pramuka.vercel.app'
                      },
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Tentang',
                        item: 'https://buku-saku-pramuka.vercel.app/tentang'
                      }
                    ]
                  },
                  {
                    '@type': 'AboutPage',
                    name: 'Tentang Buku Saku Pramuka',
                    headline: 'Tentang Buku Saku Pramuka Digital',
                    url: 'https://buku-saku-pramuka.vercel.app/tentang',
                    mainEntityOfPage: 'https://buku-saku-pramuka.vercel.app/tentang',
                    image: {
                      '@type': 'ImageObject',
                      url: 'https://buku-saku-pramuka.vercel.app/assets/5930.jpg'
                    }
                  }
                ]
              })
            }}
          />
        </Head>

        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="space-y-6 md:w-1/2">
            {[
              {
                heading: `Apa sebenarnya website ini?`,
                body: `Website ini merupakan Buku Saku Pramuka digital berupa website, berisikan materi yang telah dikumpulkan dari berbagai sumber.`
              }
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <img alt="Berkemah" className="w-full rounded" src="/assets/5930.jpg" />
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default AboutPage
