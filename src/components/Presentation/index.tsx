import CONTACT from '@/constants/contact'
import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import Image from 'next/image'
import React from 'react'
import ArticleTitle from '../ArticleTitle'
import ButtonLink from '../ButtonLink'
import ContentSection from '../ContentSection'

const Presentation = () => {
  const { navbar, presentation, resume } = useContent()
  return (
    <>
      <ContentSection id={navbar.presentation}>
        <div className='container'>
          <article className='image'>
            <Image
              fill
              src='/agustin.png'
              alt='Photo of the creator of portfolio'
            />
          </article>
          <article className='content'>
            <ArticleTitle>Agustin Di Benedetto</ArticleTitle>
            <p>{presentation}</p>
            <div className='links'>
              <ButtonLink
                href={CONTACT.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>GitHub</span>
                <Image
                  width={16}
                  height={16}
                  src='/logos/github.png'
                  alt='Github logo'
                />
              </ButtonLink>
              <ButtonLink
                href={CONTACT.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Linkedin</span>
                <Image
                  width={20}
                  height={20}
                  src='/logos/linkedin.png'
                  alt='linkedin logo'
                />
              </ButtonLink>
              <ButtonLink
                href={`/files/${resume}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>cv</span>
                <Image
                  width={20}
                  height={20}
                  src='/file-pdf.svg'
                  alt='linkedin logo'
                />
              </ButtonLink>
            </div>
          </article>
        </div>
      </ContentSection>
      <style jsx>{`
        .container {
          display: flex;
          text-align: center;
          gap: 0 32px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .image {
          width: 300px;
          aspect-ratio: 1/1.2;
          position: relative;
          background-image: radial-gradient(
            circle at top left,
            ${colors.tertiary},
            ${colors.secondary}
          );
          border-radius: 30% 70% 30% 70% / 80% 20% 80% 20%;
          overflow: hidden;
          filter: drop-shadow(0 0 1px ${colors.primary});
          animation: ${animations.morphingBorder} 30s ease infinite;
        }

        .image > :global(img) {
          object-position: 0px -5px;
          object-fit: cover;
        }

        .content p {
          max-width: 400px;
          line-height: 1.4em;
          text-align: left;
        }

        .content p:first-letter {
          margin-left: 10px;
          font-size: 1.3em;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: ${breakPoints.tablet}) {
          .container {
            flex-direction: row-reverse;
            text-align: left;
            gap: 100px;
          }
          .image {
            width: 350px;
            object-position: center;
          }
        }
      `}</style>
    </>
  )
}

export default Presentation