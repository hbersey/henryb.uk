import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/layout"

const MusicPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex py-2 mx-4">
        <div className="mx-auto lg:w-1/2 md:w-2/3">
          <h1 className="text-4xl">Music</h1>
          <div className="md:ml-8 my-2">
            <p>
              At the age of seven I began my musical education, picking up the
              clarinet. A few years later I began signing daily in Canterbury
              Cathedral Choir and started receiving weekly piano lessons. At the
              age of eleven I received an alto saxophone for christmas, however,
              due to my cathedral commitments I didn't have the time to
              dedicated to the instrument. Upon moving to a new school, aged
              thirteen, I began to play some tenor saxophone. This soon became
              my main musical interest, falling in love with the new pallet of
              musical colours that I had discovered in jazz. At first I only
              played in a big band setting however before long I was able to
              work on my improvisational skills in a smaller, combo setting.
              Tenor Saxophone became my primary study instrument however I was
              still able to work on other instruments. Deciding I wanted to be a
              "multi-instrumentalist", I got experience playing bass clarinet,
              Eb clarinet, alto saxophone and baritone saxophone. As well as
              playing in as many different settings as I could, such as,
              orchestral, chamber, jazz, pop, show etc. Additionally, I
              continued to work on my choral music. I am a bass and enjoy
              especially signing 20th century British music, although I am
              partial to some baroque and germanic music too. To conclude, Jazz
              is my passion by I pride myself on being able to fit into many
              music environments.
            </p>
            <button className="mt-2 rounded border border-gray-400 shadow-sm py-1 px-2">
              See Me Play
            </button>
          </div>

          <hr className="my-3" />

          <h1 className="text-4xl">Composition and Arranging</h1>
          <div className="md:ml-8 my-2">
            <p>
              As well as my playing I also enjoy writing compositions and
              arrangements. My interest in writing music originated from time
              spent transcribing close harmony arrangements when I was younger.
              After studying some of Jacob Colier's early arrangements,
              Alexander L'Estrange's huge portfolio of arrangements and Ed
              Newton-Rex's arrangements from his time in Cambridge University's
              Kings Men, I started to pick up some techniques that I was able to
              use in my arrangements. The natural next step, and more recent
              chapter for me was to try my hand at composition. I try to use my
              interest in Jazz improvisation to influence my writing as well as
              time spent signing in choirs, playing in wind quintets etc. To
              view my full compositional portfolio click the link below:
            </p>
            <button className="mt-2 rounded border border-gray-400 shadow-sm py-1 px-2">
              Compositional Portfolio
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MusicPage
