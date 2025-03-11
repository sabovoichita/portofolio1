import Image from "next/image";
import ButtonLogin from "./components/ButtonLogic";
import NavLink from "./components/NavLink";
import FAQListItem from "./components/FAQListItem";

export default function Home() {
  const isLoggedIn = true;
  const name = "Maria";
  return (
    <div
      data-theme="dark"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* HEADER*/}

        <section className="bg-base-300">
          <div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
            <div className="font-bold">Voichita Portofolio</div>
            <div className="space-x-4">
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
            <div>
              <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
            </div>
          </div>
        </section>
        {/* PRICING*/}
        <section className="bg-base-300" id="pricing">
          <div className="py-32 px-8 max-w-3xl mx-auto">
            <p className="text-sm uppercase font-medium text-center text-primary mb-4">
              Pricing
            </p>
            <h2 className="text-3xl lg:text-4xl font:extrabold mb-12 text-center">
              A pricing that adapts for your needs
            </h2>

            <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
              <div className="flex gap-2 items-baseline">
                <div className="text-4xl font-black">£19</div>
                <div className="uppercase text-sm font-medium opacity:60">
                  /month
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Collect customer feedback",
                  "Unlimited boards",
                  "Admin dashboards",
                  "24/7 support",
                ].map((priceItem) => (
                  <li className="flex gap-2 items-center" key={priceItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-green-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {priceItem}
                  </li>
                ))}
              </ul>

              <ButtonLogin
                isLoggedIn={isLoggedIn}
                name={name}
                extraStyle="w-full"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-base-100" id="faq">
          <div className="py-32 px-8 max-w-3xl mx-auto">
            <p className="text-sm uppercase font-medium text-center text-primary mb-4">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font:extrabold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <ul className="max-w-lg mx-auto">
              {[
                { question: "What do I get exactly?", answer: "Loreum Ipseum" },
                { question: "Can I get a refund?", answer: "Loreum Ipseum" },
                {
                  question: "I have another question",
                  answer: "Loreum Ipseum",
                },
              ].map((qa) => (
                <FAQListItem key={qa.question} qa={qa} />
              ))}
            </ul>
          </div>
        </section>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/voichita-maria-truscai/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sabovoichita"
          target="_blank"
        >
          GitHub
        </a>
      </footer>

      {/* FOOTER*/}
      <section className="bg-base-300">
        <div className="flex justify-center items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="space-x-4">
            <NavLink href="https://github.com/sabovoichita" target="_blank">
              Github
            </NavLink>
            <NavLink
              href="https://www.linkedin.com/in/voichita-maria-truscai/"
              target="_blank"
            >
              LinkedIn
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
