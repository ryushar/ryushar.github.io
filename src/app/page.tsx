import Link from "next/link";
import Image from "next/image";

const Badge = (props: any) => {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {`Hey, I'm Tushar 👋`}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software engineer, currently working at an early stage startup called `}
        <Link href="https://plotline.so" target="_blank">
          Plotline
        </Link>
        {` and helping them build scalable solutions along the way. Some of the tech stack that I get to work with here includes `}
        <Badge href="https://nextjs.org">
          <Image
            alt="Next.js logo"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {" , "}
        <Badge href="https://graphql.org">
          <Image
            alt="GraphQL logo"
            src="/graphql-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          GraphQL
        </Badge>
        {" , "}
        <Badge href="https://clickhouse.com/">
          <Image
            alt="Clickhouse logo"
            src="/clickhouse-logo.svg"
            className="!mr-1 h-[14px]"
            width="14"
            height="14"
          />
          Clickhouse
        </Badge>
        {" , "}
        <Badge href="https://nodejs.org">
          <Image
            alt="NodeJS logo"
            src="/nodejs-logo.svg"
            className="!mr-1 h-[14px]"
            width="14"
            height="14"
          />
          NodeJS
        </Badge>
        {" , "}
        <Badge href="https://go.dev">
          <Image
            alt="Go logo"
            src="/golang-logo.svg"
            className="!mr-1 h-[14px]"
            width="14"
            height="14"
          />
          GoLang
        </Badge>
        {` and more. `}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I also run my own online multiplayer web game `}
          <Badge href="https://ryuten.io">
            <Image
              alt="Ryuten logo"
              src="/ryuten-logo.png"
              className="!mr-1 h-[14px]"
              width="14"
              height="14"
            />
            Ryuten
          </Badge>
          {` as a personal side project. The main game server is written in `}
          <Badge href="https://nextjs.org">
            <Image
              alt="GraphQL logo"
              src="/cpp-logo.svg"
              className="!mr-1 h-[14px]"
              width="14"
              height="14"
            />
            C++
          </Badge>
          {`, the API server was made using `}
          <Badge href="https://nextjs.org">
            <Image
              alt="GraphQL logo"
              src="/typescript-logo.svg"
              className="!mr-1 h-[14px]"
              width="14"
              height="14"
            />
            TypeScript
          </Badge>
          {`, the main website with `}
          <Badge href="https://graphql.org">
            <Image
              alt="Next.js logo"
              src="/next-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Next.js
          </Badge>
          {`, and the game client uses `}
          <Badge href="https://graphql.org">
            <Image
              alt="Next.js logo"
              src="/pixijs-logo.svg"
              className="w-auto h-[14px]"
              width="337"
              height="116"
            />
          </Badge>
          {" ."}
        </p>
      </div>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter mt-16">
        My work 💻
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Developing and improving each and every day, trying to create an
          impact along the way. Here's a summary of my work so far.`}
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Plotline</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Development Engineer, Jan 2023 - Present
        </p>
        <p>
          I joined <a href="https://plotline.so/">Plotline</a> as an intern back
          in Jan 2023 and later got a full time offer in July 2023. Plotline is
          a B2B SaaS tool, an in-app engagement platform. During my time here
          I&apos;ve
        </p>
        <ul>
          <li>
            Implemented multiple new features in SDKs accross different
            platforms like Web (TypeScript), iOS (Swift), Android (Java)
          </li>
          <li>
            Have developed and worked upon features like Role Based Access
            Control system, push notification campaign system, dynamic
            segmentation system, drag and drop layout builder and more.
          </li>
          <li>
            Took client calls to understand pain points and possible bugs that
            they discovered.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Ryuten</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Game Developer, 2022 — Present
        </p>
        <p>
          It is an online multiplayer web game that I developed as a personal
          side project. It currently has an average of 5,000+ monthly active
          users with an average engagement time of 30+ min per session.
        </p>
        <ul>
          <li>
            The main game server is written in C++ which processes the actions
            of players, interaction in between 10,000s of objects, calculates
            the difference in each players&apos; view every frame, encodes the
            data into binary packet and sends them over a WebSocket connection
            all within a window of 40ms.
          </li>
          <li>
            The API server is written in TypeScript and uses the ExpressJS
            library, the website is built using the NextJS framework and
            PostgreSQL has been used as the database.
          </li>
          <li>
            The game client has been built using TypeScript, SCSS and PixiJS
            along with WebAssembly for generating WebGL buffers.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Eduboard</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Developer (Intern), Feb 2022 — Dec 2022
        </p>
        <p>
          I interned here for roughly an year as a frontend developer.{" "}
          <Link href="https://eduboard.so" target="_blank">
            Eduboard
          </Link>{" "}
          is an edutech startup which provides end-to-end fully customizable ERP
          solution for an educational institute to go complect digital. During
          my days here, I
        </p>
        <ul>
          <li>
            Discussed rough designs and ideas with the CTO and converted them
            into actual UI screens.
          </li>
          <li>
            Developed the main Admin dashboard using NextJS, TailwindCSS,
            Chart.JS and more.
          </li>
          <li>
            Converted figma designs into React Native code for their mobile app.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          iComply Lifescience Solutions
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer (Intern), Oct 2021 — Dec 2021
        </p>
        <p>
          It was a startup building a SaaS tool targetted at pharmaceutical
          sector. During my internship here, I
        </p>
        <ul>
          <li>
            Developed the NodeJS backend for integrating Microsoft Office for
            Web using the WOPI protocol.
          </li>
          <li>
            Built the backend REST API endpoints using ExpressJS, MySQL, JWT and
            worked on the frontend UIs made using ReactJS.
          </li>
          <li>
            Managed the AWS EC2 linux servers and deployed applications on them.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          VexxusArts
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Game Developer (Freelance), March 2020 — Sep 2020
        </p>
        <p>
          I worked for them to recreate their web game{" "}
          <Link href="https://senpa.io" target="_blank">
            Senpa.io
          </Link>
          , rewrite it using new tech stack, expand its feature set and also
          improve the performace accross the board. Some of the work I did for
          them was
        </p>
        <ul>
          <li>Rebuilt the NodeJS backend server using TypeScript.</li>
          <li>
            {`Improved the broad phase collision detection performance by ~15% and
            optimised the app level protocol and reduced the server's outgoing
            bandwidth by ~25%.`}
          </li>
          <li>
            Developed the web and mobile frontend using WebPack, TypeScript,
            Canvas2D Web API and PixiJS.
          </li>
        </ul>
      </div>
    </section>
  );
}
