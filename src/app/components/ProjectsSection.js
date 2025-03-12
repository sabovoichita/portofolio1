import Image from "next/image";
import NavLink from "../components/NavLink";
import img1 from "C:/Users/kita/Desktop/Projects/portofolio1/src/app/images/1.png";
import img2 from "C:/Users/kita/Desktop/Projects/portofolio1/src/app/images/2.png";
import img3 from "C:/Users/kita/Desktop/Projects/portofolio1/src/app/images/3.png";
import img4 from "C:/Users/kita/Desktop/Projects/portofolio1/src/app/images/4.png";

export default function Projects() {
  return (
    <section>
      <section
        id="1"
        className="px-8 py-32 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap:14 items-center lg:items-start"
      >
        <Image src={img1} alt="Product Demo" className="w-96 rounded-xl" />
        <div className="lg:ml-6">
          <div className="mb-4 mt-4 text-xl lg:mt-0">
            <NavLink
              href="https://sabovoichita.github.io"
              className="text-4x font-extrabold px-8 justify-between"
            >
              1. Portofolio Project Using FastTrackIT
            </NavLink>
          </div>

          <div className="opacity-90 mb-10 text-xs text-justify">
            This project is my CV made at FastTrackIT course, guided by Matei
            Nicolae. It contains several pieces of information related to my
            curriculum. There is a 'Home' page with several links, a 'Skills'
            page made with JavaScript that contains all of the technologies
            sorted by endorcements, a 'Projects' page with all my
            certifications, also designed using JavaScript, and there is also a
            'Languages' page that has a table made with JavaScript with the
            known languages and level. The 'Footer' area contains all the
            contact link buttons (Linkedin, Github, Youtube, Email). A button
            with a light buld can also made the contract gray when clicked. On
            the side of the page there is an area with a 'Contact form' and a
            'Rubik's Face' also designed with JavaScript.
          </div>
        </div>
      </section>

      <section
        id="2"
        className="px-8 py-32 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap:14 items-center lg:items-start"
      >
        <Image src={img2} alt="Product Demo" className="w-96 rounded-xl" />
        <div className="lg:ml-6">
          <div className="mb-4 mt-4 text-xl lg:mt-0">
            <NavLink
              href="https://github.com/sabovoichita/udemy.sabovoichita.github.io"
              className="text-4x font-extrabold pb-8 justify-between"
            >
              2. Portofolio Project Using Udemy
            </NavLink>
          </div>

          <div className="opacity-90 mb-10 text-xs text-justify">
            This project is my CV made on Udemy, guided by Matei Nicolae. It
            contains several pieces of information related to my curriculum.
            There is a 'Home' page with several links, a 'Skills' page made with
            JavaScript that contains all of the technologies sorted by
            endorcements, a 'Projects' page with all my certifications, also
            designed using JavaScript, and there is also a 'Languages' page that
            has a table made with JavaScript with the known languages and level.
            The 'Footer' area contains all the contact link buttons (Linkedin,
            Github, Youtube, Email). A button with a light buld can also made
            the contract gray when clicked. On the side of the page there is an
            area with a 'Contact form' and a 'Rubik's Face' also designed with
            JavaScript.
          </div>
        </div>
      </section>

      <section
        id="3"
        className="px-8 py-32 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap:14 items-center lg:items-start"
      >
        <Image src={img3} alt="Product Demo" className="w-96 rounded-xl" />
        <div className="lg:ml-6">
          <div className="mb-4 mt-4 text-xl lg:mt-0">
            <NavLink
              href="https://github.com/sabovoichita/sabovoichita-profile-react"
              className="text-4x font-extrabold mb-6 justify-between"
            >
              3. Portofolio Projects Using React
            </NavLink>
          </div>

          <div className="opacity-90 mb-10 text-xs text-justify">
            This project is my CV made on Udemy, guided by Matei Nicolae. It
            contains several pieces of information related to my curriculum.
            There is a 'Home' page with several links, a 'Skills' page made with
            JavaScript that contains all of the technologies sorted by
            endorcements, a 'Projects' page with all my certifications, also
            designed using JavaScript, and there is also a 'Languages' page that
            has a table made with JavaScript with the known languages and level.
            The 'Footer' area contains all the contact link buttons (Linkedin,
            Github, Youtube, Email). A button with a light buld can also made
            the contract gray when clicked. On the side of the page there is an
            area with a 'Contact form' and a 'Rubik's Face' also designed with
            JavaScript
          </div>
        </div>
      </section>
      <section
        id="4"
        className="px-8 py-32 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap:14 items-center lg:items-start"
      >
        <Image src={img4} alt="Product Demo" className="w-96 rounded-xl" />
        <div className="lg:ml-6">
          <div className="mb-4 mt-4 text-xl lg:mt-0">
            <NavLink
              href="https://sabovoichita.github.io/teams-networking/"
              className="text-4x font-extrabold mb-6 justify-between"
            >
              4. Teams Neworking Project Using FastTrackIT
            </NavLink>
          </div>

          <div className="opacity-90 mb-10 text-xs text-justify">
            This project is the second one made at FastTrackIT course, guided by
            Matei Nicolae. It contains a table with the projects made by the
            student, also ideeas for future projects. There is a 'header', a
            'Remove Selected' button to remove content, a 'Search' area for
            filtering projects. At the bottom of the table there is an 'imput
            area' where more teams and projects can be added. The source code
            can be found in the footer area. The filds can be eddited or deleted
            using the buttons on the left of the table.
          </div>
        </div>
      </section>
    </section>
  );
}
