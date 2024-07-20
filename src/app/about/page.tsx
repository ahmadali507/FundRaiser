/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NEXWU9XWGPN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { ArrowRightIcon } from "../utils/IconSvgs";
import Navbar from "@/components/mainComponents/Navbar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="bg-red-300 w-[100vw] h-[30vh] mt-20 text-center font-serif md:text-3xl sm:text-2xl">
             <p className="h-full w-[70%] m-auto mt-5"> 
                This is the about page of fundraising campaing. Why you shaould Donate to us? We have every reason for you to join our program
            </p>
      </div>
      <main className="flex-1 pt-24 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Start a Fundraiser",
              description: "Encourage visitors to start their own fundraising campaigns on behalf of Hope For All. Mention that the organization will provide the resources needed to make the fundraiser a success, whether it's a marathon, bake sale, or other event.",
              linkText: "Learn More",
              bgColor: "bg-muted"
            },
            {
              title: "Make a Monthly Donation",
              description: "Invite visitors to become sustaining donors by making a monthly contribution. Explain that this reliable support helps the organization plan for the future and continue its vital work.",
              linkText: "Donate Monthly",
              bgColor: "bg-background"
            },
            {
              title: "Shop for a Cause",
              description: "Highlight the online store where visitors can purchase merchandise like t-shirts and tote bags to show their support and raise awareness for the cause.",
              linkText: "Shop Now",
              bgColor: "bg-muted"
            },
            {
              title: "Spread Awareness",
              description: "Encourage visitors to host presentations or speak at events to share the organization's message with their community. Mention that the Hope For All team is available to provide resources and support.",
              linkText: "Get Involved",
              bgColor: "bg-background"
            },
            {
              title: "Join our Team",
              description: "Invite visitors to join the organization's team, either as volunteers or employees, to contribute to the important work being done.",
              linkText: "Apply Now",
              bgColor: "bg-muted"
            },
          ].map((section, index) => (
            <section key={index} className={`${section.bgColor} py-12 md:py-24 flex justify-center items-center`}>
              <div className="max-w-md w-full shadow-lg shadow-slate-400 border-2 border-slate-200 bg-slate-200 text-center p-8 hover:bg-black hover:text-white transition-all md:hover:scale-125">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground mb-6">{section.description}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline text-slate-500" prefetch={false}>
                  {section.linkText}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Hope For All. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
