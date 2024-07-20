/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dwKrMt3bX1j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HospitalIcon, MenuIcon, ShieldIcon } from "./utils/IconSvgs";
import { DialogBox } from "@/components/ui/DialogForm";
import Navbar from "@/components/mainComponents/Navbar";
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-200 bg-[url('./assets/photos/fundraiser.jpg')] bg-no-repeat bg-cover opacity-50">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 ">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black opacity-none">
                    Help Make a Difference
                  </h1>
                  <p className="max-w-[600px] text-gray-100 md:text-xl">
                    Your donation can provide life-changing support to those in
                    need. Join us in making a positive impact on our community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md md:bg-white md:text-black  text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-slate-300 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <DialogBox/>
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-gray-800 px-8 text-sm font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className=" bg-cover bg-center h-[550px] mx-auto aspect-video overflow-hidden rounded-xl w-[100%] ">
                {/* Content here */}
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">
                  Our Cause
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Empowering Our Community
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to provide essential resources and support to
                  those in need within our local community. Through your
                  donations, we can make a lasting impact and create a brighter
                  future for all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">
                  Your Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  How Your Donation Helps
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your generous donation can provide essential services, food,
                  and shelter to those in need. See the real-world impact your
                  support can make in our community.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <MenuIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Meals Provided
                  </h3>
                  <p className="text-gray-400">
                    Your donation can provide 10 nutritious meals to families
                    struggling with food insecurity.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <ShieldIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Nights of Shelter
                  </h3>
                  <p className="text-gray-400">
                    Your support can offer a warm, safe place to sleep for those
                    without a home.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <HospitalIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Medical Assistance
                  </h3>
                  <p className="text-gray-400">
                    Your donation can provide access to essential healthcare
                    services for those in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-involved"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">
                  Get Involved
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Join Us in Making a Difference
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many ways you can get involved and support our
                  cause. Volunteer your time, spread the word, or make a
                  donation to help us create a lasting impact in our community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Volunteer
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-gray-700 px-8 text-sm font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-600 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="donate"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">
                  Donate
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Support Our Cause
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donation can make a real difference in the lives of those
                  we serve. Every contribution, no matter the size, helps us
                  continue our mission of empowering our community.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Enter donation amount"
                    className="max-w-lg flex-1 bg-gray-800 text-white border-gray-700"
                  />
                  {/* <Button type="submit" className="bg-primary text-primary-foreground">Donate</Button> */}
                  <DialogBox />
                </form>
                <p className="text-xs text-gray-400">
                  All donations are tax-deductible.{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-2 text-gray-300"
                    prefetch={false}
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 p-6 md:py-12 w-full text-gray-200">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">About</h3>
            <Link href="#" prefetch={false} className="text-gray-300">
              Our Mission
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Our Impact
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Get Involved
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Donate
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Resources</h3>
            <Link href="#" prefetch={false} className="text-gray-300">
              FAQs
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Blog
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              News
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Connect</h3>
            <Link href="#" prefetch={false} className="text-gray-300">
              Facebook
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Twitter
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Instagram
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              LinkedIn
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Legal</h3>
            <Link href="#" prefetch={false} className="text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Terms of Service
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Contact</h3>
            <Link href="#" prefetch={false} className="text-gray-300">
              Email
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Phone
            </Link>
            <Link href="#" prefetch={false} className="text-gray-300">
              Address
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-gray-400">
          &copy; 2024 Fundraising Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
