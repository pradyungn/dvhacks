import Head from 'next/head'

export default ({
  title = 'DVHacks III',
  description = 'Dougherty Valley High School\'s premier hackathon. What will you make?',
  image = 'https://dvhacks.tech/static/banner.png',
  url = 'https://dvhacks.tech'
}) => (
  <Head>
    <title>{title}</title>
    <link rel="shortcut icon" href="/static/logo.png"/>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="DVHacks" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'dvhacks',
          url: 'https://dvhacks.tech',
          logo: 'https://dvhacks.tech/static/banner.png',
          sameAs: [
            'https://www.instagram.com/dvhacks',
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'info@dvhacks.tech',
              contactType: 'customer support',
              url: 'https://dvhacks.tech'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'DVHacks',
          /* startDate: '2019-10-26T9:00', */
          /* endDate: '2019-10-26T21:00', */
          description:
            'Register now for 36 hours of hacking in one of the most rewarding events this year! DVHacks III is set to launch in mid-February 2021 - what will you make?',
          isAccessibleForFree: true,
          url: 'https://dvhacks.tech',
          image: 'https://dvhacks.tech/static/banner.png',
          location: {
            '@type': 'Place',
            name: 'Your Computer!'
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'DVHacks Team'
          }
        })
      }}
    />
  </Head>
)
