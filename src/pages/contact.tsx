import React, { FC } from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { PageProps } from "gatsby"

const ContactPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      pageName="Contact"
      description="Contact Henry Bersey"
    >
      <div className="flex h-full">
        <div className="px-1 m-auto divide-y lg:w-1/2 md:w-2/3">
          <div className="mb-3">
            <h1 className="mb-2 text-4xl">Get In Touch</h1>
            <p>
              Contact me at&nbsp;
              <a href="mailto:henry@bersey.com">
                <em>henry@bersey.com</em>
              </a>
              .
            </p>
          </div>
          <div>
            <p className="mt-3">Or find me on social media:</p>
            <div className="grid grid-cols-2 gap-2 mt-1 text-center sm:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <a href="https://instagram.com/hbersey" target="_BLANK">
                  <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                </a>
                <p>@hbersey</p>
              </div>
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <a href="https://instagram.com/hbersey.music" target="_BLANK">
                  <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                </a>
                <p>@hbersey.music</p>
              </div>
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <a href="https://twitter.com/HBersey" target="_BLANK">
                  <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
                </a>
                <p>@HBersey</p>
              </div>
              <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                <a href="www.linkedin.com/in/hbersey" target="_BLANK">
                  <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
                </a>
                <p>Henry Bersey</p>
              </div>
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <a href="https://github.com/hbersey" target="_BLANK">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                </a>
                <p>hbersey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
