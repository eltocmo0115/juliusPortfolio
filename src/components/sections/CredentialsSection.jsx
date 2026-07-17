import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import edgeComputingCertificate from '@/assets/credentials/edge-computing-seminar.png'
import generativeAiCertificate from '@/assets/credentials/generative-ai-certificate.png'
import firewallCertificate from '@/assets/credentials/firewall-certificate.png'
import bicycleLanesCertificate from '@/assets/credentials/bicycle-lanes-seminar.png'
import dictCybersecurityCertificate from '@/assets/credentials/dict-cybersecurity-awareness.png'
import wearOsCertificate from '@/assets/credentials/wearos-emerging-technology-seminar.png'
import cloudComputingCertificate from '@/assets/credentials/cloud-computing-seminar.png'
import { profile } from '@/data/portfolioData'

const certifications = [
  {
    title: 'Generative AI for Beginners',
    issuer: 'Great Learning Academy',
    date: 'October 2024',
    credential: 'PLOUPAZD',
    image: generativeAiCertificate,
    cropClass: 'credential-image--great-learning-ai',
  },
  {
    title: 'Introduction to Firewall',
    issuer: 'Great Learning Academy',
    date: 'September 2024',
    credential: 'VPOREQJF',
    image: firewallCertificate,
    cropClass: 'credential-image--great-learning-firewall',
  },
]

const seminars = [
  {
    title: 'WearOS: Emerging Technology for Internet and Learning of Everything',
    issuer: 'Mapúa Malayan Colleges Laguna',
    date: 'November 23, 2024',
    detail: 'IT180F professional programming seminar',
    image: wearOsCertificate,
  },
  {
    title: 'Introduction to Edge Computing',
    issuer: 'USAID · Asia Open RAN Academy',
    date: 'August 31, 2024',
    detail: 'Advancing Open RAN in Asia webinar',
    image: edgeComputingCertificate,
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'USAID · Asia Open RAN Academy',
    date: 'August 24, 2024',
    detail: 'Advancing Open RAN in Asia webinar',
    image: cloudComputingCertificate,
  },
  {
    title: 'Implementation and Protocols for Safe Bicycle Lanes',
    issuer: 'Webinar participant',
    date: 'June 28, 2022',
    detail: 'A street to success',
    image: bicycleLanesCertificate,
  },
  {
    title: 'Cybersecurity Awareness',
    issuer: 'DICT Region IV-A Cybersecurity',
    date: 'June 20, 2024',
    detail: 'Training control no. 005-CL01-06202024',
    image: dictCybersecurityCertificate,
  },
]

const cloudCredentials = [
  {
    title: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'November 14, 2023',
    mark: 'AWS',
    credentialUrl: 'https://www.credly.com/badges/1f7c2c41-b711-42ab-bd2f-2d2d43d3aed0/public_url',
  },
  {
    title: 'CompTIA Tech+ Certification',
    issuer: 'CompTIA',
    date: 'December 12, 2025',
    mark: 'TECH+',
    credentialUrl: 'https://www.credly.com/badges/fa483a24-7235-4570-9919-8b5a17c4751e/public_url',
  },
  {
    title: 'Google Cloud Essentials',
    issuer: 'Google',
    date: 'September 2023',
    credential: '4984622',
    mark: 'GCP',
  },
  {
    title: 'Automate Deployment and Manage Traffic on a Google Cloud Network',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5001027',
    mark: 'GCP',
  },
  {
    title: 'Baseline: Infrastructure',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5001655',
    mark: 'GCP',
  },
  {
    title: 'Baseline: Data, ML, AI',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5002155',
    mark: 'GCP',
  },
  {
    title: 'Implement Load Balancing on Compute Engine',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5002434',
    mark: 'GCP',
  },
  {
    title: 'Build a Secure Google Cloud Network',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5010380',
    mark: 'GCP',
  },
  {
    title: 'Perform Foundational Infrastructure Tasks in Google Cloud',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5010602',
    mark: 'GCP',
  },
  {
    title: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
    issuer: 'Google',
    date: 'September 2023',
    credential: '5011288',
    mark: 'GCP',
  },
]

function CredentialCard({ item, type, index }) {
  return (
    <article className="credential-card">
      <a
        className="credential-media"
        href={item.image}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${item.title} certificate`}
      >
        <img
          className={item.cropClass ?? ''}
          src={item.image}
          alt={`${item.title} certificate issued by ${item.issuer}`}
          loading="lazy"
        />
        <span className="credential-view">View certificate ↗</span>
      </a>
      <div className="credential-card-copy">
        <div className="credential-card-meta">
          <span>{String(index + 1).padStart(2, '0')} / {type}</span>
          <time>{item.date}</time>
        </div>
        <h4>{item.title}</h4>
        <p>{item.issuer}</p>
        <small>{item.credential ? `Credential ID · ${item.credential}` : item.detail}</small>
      </div>
    </article>
  )
}

function CloudCredentialRow({ item, index }) {
  const verificationUrl = item.credentialUrl ?? profile.linkedin
  const verificationLabel = item.credentialUrl ? 'Credly' : 'LinkedIn'

  return (
    <li className="cloud-credential-row">
      <span className={`cloud-credential-mark cloud-credential-mark--${item.mark.toLowerCase()}`} aria-hidden="true">{item.mark}</span>
      <div className="cloud-credential-copy">
        <span className="cloud-credential-number">{String(index + 1).padStart(2, '0')}</span>
        <h4>{item.title}</h4>
        <p>{item.issuer} · {item.date}</p>
        {item.credential && <small>Credential ID · {item.credential}</small>}
      </div>
      <a href={verificationUrl} target="_blank" rel="noreferrer" aria-label={`Verify ${item.title} on ${verificationLabel}`}>
        {verificationLabel} <span aria-hidden="true">↗</span>
      </a>
    </li>
  )
}

function CredentialsSection() {
  const ref = useScrollAnimation()

  return (
    <section id="credentials" className="section credentials-section">
      <div className="page-wrap">
        <div className="section-heading-row credentials-heading">
          <div>
            <p className="section-kicker">04 / Credentials</p>
            <h2>Learning, documented.</h2>
          </div>
          <p>Certificates and seminars that reflect my continued learning across AI, cybersecurity, edge computing, and technology in the community.</p>
        </div>

        <div className="credentials-content animate-on-scroll" ref={ref}>
          <section className="credential-group" aria-labelledby="certifications-heading">
            <div className="credential-group-heading">
              <p>01</p>
              <h3 id="certifications-heading">Certifications</h3>
              <span>12 verified credentials</span>
            </div>
            <div className="certifications-body">
              <div className="credential-grid">
                {certifications.map((item, index) => (
                  <CredentialCard item={item} type="Certificate" index={index} key={item.title} />
                ))}
              </div>
              <div className="cloud-credentials">
                <div className="cloud-credentials-heading">
                  <p>Cloud learning credentials</p>
                  <span>AWS, Google Cloud & CompTIA · 2023–2025</span>
                </div>
                <ol>
                  {cloudCredentials.map((item, index) => (
                    <CloudCredentialRow item={item} index={index} key={item.title} />
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="credential-group" aria-labelledby="seminars-heading">
            <div className="credential-group-heading">
              <p>02</p>
              <h3 id="seminars-heading">Seminars</h3>
              <span>5 learning events</span>
            </div>
            <div className="credential-grid">
              {seminars.map((item, index) => (
                <CredentialCard item={item} type="Seminar" index={index} key={item.title} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default CredentialsSection
