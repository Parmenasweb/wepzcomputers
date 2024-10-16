import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | WepZ Computers</title>
        <meta
          name="description"
          content="WepZ Computers' privacy policy outlines how we collect, use, and protect your personal information when you use our services."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, customer privacy, WepZ Computers"
        />
        <link rel="canonical" href="https://www.wepzcomputers.com/privacy" />
      </Head>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-[90%] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          <Card>
            <CardHeader>
              <CardTitle>WepZ Computers Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p>
                  At WepZ Computers, accessible from wepzcomputers.com, one of
                  our main priorities is the privacy of our visitors. This
                  Privacy Policy document contains types of information that is
                  collected and recorded by WepZ Computers and how we use it. If
                  you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us
                  through email at wepzcomputers@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">Log Files</h2>
                <p>
                  WepZ Computers follows a standard procedure of using log
                  files. These files log visitors when they visit websites. All
                  hosting companies do this and a part of hosting services
                  analytics. The information collected by log files includes
                  internet protocol (IP) addresses, browser type, Internet
                  Service Provider (ISP), date and time stamp, referring/exit
                  pages, and possibly the number of clicks. These are not linked
                  to any information that is personally identifiable. The
                  purpose of the information is for analyzing trends,
                  administering the site, tracking users movement on the
                  website, and gathering demographic information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Cookies And Web Beacons
                </h2>
                <p>
                  Like any other website, WepZ Computers uses cookies. These
                  cookies are used to store information including visitors
                  preferences, and the pages on the website that the visitor
                  accessed or visited. The information is used to optimize the
                  users experience by customizing our web page content based on
                  visitors browser type and/or other information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Google DoubleClick DART Cookie
                </h2>
                <p>
                  Google is one of the third-party vendors on our site. It also
                  uses cookies, known as DART cookies, to serve ads to our site
                  visitors based upon their visit to www.website.com and other
                  sites on the internet. However, visitors may choose to decline
                  the use of DART cookies by visiting the Google ad and content
                  network Privacy Policy
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Privacy Policies
                </h2>
                <p>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of WepZ Computers Third-party ad
                  servers or ad networks uses technologies like cookies,
                  JavaScript, or Web Beacons that are used in their respective
                  advertisements and links that appear on WepZ Computers which
                  are sent directly to users browser. They automatically receive
                  your IP address when this occurs. These technologies are used
                  to measure the effectiveness of their advertising campaigns
                  and/or to personalize the advertising content that you see on
                  websites that you visit. Note that WepZ Computers has no
                  access to or control over these cookies that are used by
                  third-party advertisers
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Third-Party Privacy Policies
                </h2>
                <p>
                  WepZ Computers&apos; Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt out of certain
                  options. You may find a complete list of these Privacy
                  Policies and their links here: Privacy Policy Links. You can
                  choose to disable cookies through your individual browser
                  options. To know more detailed information about cookie
                  management with specific web browsers, it can be found at the
                  browsers respective websites. What Are Cookies?
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Children &apos;s Information
                </h2>
                <p>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity. WepZ Computers does not knowingly collect any
                  Personal Identifiable Information from children under the age
                  of 13. If you think that your child provided this kind of
                  information on our website, we strongly encourage you to
                  contact us immediately and we will do our best efforts to
                  promptly remove such information from our records.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Online Privacy Policy Only
                </h2>
                <p>
                  This Privacy Policy (created with the GDPR Privacy Policy
                  Generator) applies only to our online activities and is valid
                  for visitors to our website with regards to the information
                  that they shared and/or collect in WepZ Computers. This policy
                  is not applicable to any information collected offline or via
                  channels other than this website.
                </p>
              </section>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "WepZ Computers&apos; privacy policy outlines how we collect, use, and protect your personal information when you use our services.",
            publisher: {
              "@type": "Organization",
              name: "WepZ Computers",
            },
          }),
        }}
      />
    </>
  );
}
