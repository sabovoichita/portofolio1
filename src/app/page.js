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
      </main>
    </div>
  );
}
