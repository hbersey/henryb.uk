import { PageProps } from "gatsby"
import React, { FC, ReactNode } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGooglePlay,
  faItchIo,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"

type ProjectProps = {
  title: string
  description: ReactNode
  buttons: {
    icon: IconProp
    text: string
    link: string
  }[]
}

const Project: FC<ProjectProps> = ({ title, description, buttons }) => {
  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
      <p>{description}</p>
      <div className="mt-1 space-x-2">
        {buttons.map(({ icon, text, link }) => (
          <a href={link} target="_BLANK">
            <button className="px-2 py-1 border border-gray-300 rounded-md">
              <FontAwesomeIcon icon={icon} />
              &nbsp;
              {text}
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}

const projects: ProjectProps[] = [
  {
    title: "Screen Timeout Tile",
    description: (
      <>
        Screen Timeout Tile adds an additional tile to android, the screen
        timeout tile. The tile allows one to quickly change how long it will
        take for their phone screen to turn itself off. The app is very simple,
        however, I felt the alternatives out there weren't hitting the spot.
        Hence me making it. The app was original put on the play store for
        purpose of sharing with my mates but quickly grew. Now boasting over
        5.5k downloads, my first mobile app was released a couple years ago now,
        and with a full rework and translation in progress Screen Timeout Tile
        2.0 is set to be released soon!
      </>
    ),
    buttons: [
      {
        icon: faGooglePlay,
        text: "Download Now",
        link:
          "https://play.google.com/store/apps/details?id=bersey.henry.screensleeptile",
      },
    ],
  },
  {
    title: "Pandemic Shopper",
    description: (
      <>
        During the lock down of 2020 I had the chance to take part in my first
        game jam. I worked with two others (a musician and artist) and we made
        "Pandemic Shopper" to match the theme "Trust No One". In the game:&nbsp;
        <em>
          A deadly virus is upon us and you don't have your essentials! Try to
          get the highest score by surviving through the days and weeks. Get the
          item you need while risking your life to The Virus in an ever evolving
          supermarket!&nbsp;
        </em>
        We ranked 71st overall (67th in game play), and thoroughly enjoyed the
        process. We uploaded the game two and a half hours before the
        deadline... all bit a little unpolished! P.S. It's safe to say this game
        is due an way overdue an update... hint, hint!
      </>
    ),
    buttons: [
      {
        text: "Play Now",
        icon: faItchIo,
        link: "https://hbersey.itch.io/pandemic-shopper",
      },
      {
        text: "View Source",
        icon: faGithub,
        link: "https://github.com/hbersey/Pandemic-Shopper",
      },
    ],
  },
  {
    title: "This Site!",
    description: (
      <>
        The source code for this site is available on my GitHub! <br />
        <em>henryb.uk</em> is built using React, GatsbyJS, TailwindCSS and makes
        use of FontAwesome's Icons. The site is hosted on Netlify.
      </>
    ),
    buttons: [
      {
        text: "View Source",
        icon: faGithub,
        link: "https://github.com/hbersey/henryb.uk",
      },
    ],
  },
]

const DevPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      pageName="Programming"
      description="Henry Bersey is a programmer using tools such as Java, C, C++, JS, TS, C#, Python"
    >
      <div className="flex py-2 mx-4">
        <div className="mx-auto space-y-2 divide-y divide-gray-300 lg:w-1/2 md:w-2/3">
          <div>
            <h1 className="text-4xl">Programming</h1>
            <p className="pb-1 mb-1 border-b">
              From a young age I liked to dismantle things, from Bic pens to
              “Build your Own Alarm Clock Kits”. It didn’t take long to find my
              way on to “Cheat Engine”, where I learnt to manipulate the
              behaviour of software. I soon discovered Chrome Developer Tools,
              and so came the ability to alter site content, colours, make
              pop-ups and so on. At the same time, I had been learning “Batch”,
              initially showing off the “matrix effect”, then making pop-ups on
              friend's computers and ultimately using the “SETHC trick” to grant
              myself local admin privileges to rearrange friend’s desktops and
              so on. Ten years on and I’m still fiddling with computers. My
              curiosity is fuelled by open-sourced software as well as the
              thrill of writing my own programs, and my mischievousness has
              developed into an interest in cyber security. Also, advances in
              machine learning really excite me, inspiring me to learn these
              techniques so that I can go on to apply them to help others.
            </p>
            <strong>Areas of Interest:</strong>
            <ul className="ml-4 list-disc list-inside">
              {[
                "Full-Stack Web Development",
                "App Development",
                "Cyber Security",
                "Machine Learning",
              ].map(lang => (
                <li>{lang}</li>
              ))}
            </ul>
            <strong>Languages:</strong>
            <ul className="ml-4 list-disc list-inside">
              {["Java", "C/C++", "Javascript/Typescript", "C#", "Python"].map(
                lang => (
                  <li>{lang}</li>
                )
              )}
            </ul>
            <strong>Libraries / Frameworks etc:</strong>
            <ul className="ml-4 list-disc list-inside">
              {[
                "React and React Native",
                "Unity 3D",
                "Android SDK",
                "tensorflow and tflearn",
              ].map(lang => (
                <li>{lang}</li>
              ))}
            </ul>
          </div>
          {projects.map((props, i) => (
            <Project {...props} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default DevPage
