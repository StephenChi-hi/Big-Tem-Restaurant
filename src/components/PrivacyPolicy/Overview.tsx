"use client";

import React from "react";
import { Header1Plus, Paragraph1, Paragraph3, ParagraphLink1 } from "../Text";
import Section6 from "../home/sections/Section6";
import AOS from "aos";

function Overview() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  
  return (
    <div className="pt-[20px] bg-bg_gray">
      <div data-aos="flip-right" className="container1">
        <div className="relative overflow-hidden">
          <div className="flex flex-col bg-primary sm:gap-[20px] px-4 sm:p-[65px] py-12 mt-[50px] w-full sm:text-center text-white">
            <Header1Plus>Privacy Policy</Header1Plus>
            <Paragraph3>
              At Lala Healthy Foods, we value your privacy and are committed to
              protecting your personal information. This policy outlines how we
              collect, use, and safeguard your data when you use our website and
              services.
            </Paragraph3>
          </div>
          <div className="absolute sm:-bottom-[200px] -bottom-[60px] overflow-hidden hidden f.lex w-full">
            <img
              className="min-w-full"
              src="/images/white_bgR.svg"
              alt="privacy"
            />
          </div>
        </div>

        <div className="py-4 sm:py-[50px] rounded-b-[24px] text-p_black z-[10] bg-white px-4 sm:px-[65px] space-y-[18px] sm:space-y-[32px]">
          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Information We Collect
            </ParagraphLink1>
            <Paragraph1>
              To provide the best experience at GrandioseGrin, we may collect:
              <br />
              - Personal Details: When you place an order or create an account,
              we may collect your name, email address, phone number, and
              delivery address.
              <br />
              - Purchase Data: Payment information such as credit/debit card
              details is collected securely through trusted payment gateways.
              <br />- Cookies: We collect data on how you interact with our
              website, including IP addresses, browser types, and pages visited,
              to improve your experience.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              How We Use Your Information
            </ParagraphLink1>
            <Paragraph1>
              Your information allows us to:
              <br />
              - Process Orders: Ensure smooth order fulfillment and shipping.
              <br />
              - Improve Services: Personalize product recommendations and
              enhance user experience based on preferences.
              <br />- Stay Connected: With your consent, share updates on new
              arrivals, promotions, or exclusive deals.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Safeguarding Your Data
            </ParagraphLink1>
            <Paragraph1>
              We implement industry-standard security measures to protect your
              personal data. While no system is completely secure, we are
              committed to keeping your information safe.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Sharing Your Information
            </ParagraphLink1>
            <Paragraph1>
              - We do not sell or rent your personal information to third
              parties.
              <br />
              - Information may be shared with delivery partners to fulfill your
              orders.
              <br />- We may disclose information if required by law or to
              protect our rights and the safety of our users.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Cookies and Tracking Technologies
            </ParagraphLink1>
            <Paragraph1>
              Our website uses cookies to enhance your experience. Cookies help
              us:
              <br />
              - Remember your login details and preferences.
              <br />
              - Analyze website performance and usage.
              <br />
              You can adjust your browser settings to manage cookies, but some
              features of the website may not function properly without them.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Data Security
            </ParagraphLink1>
            <Paragraph1>
              We implement robust security measures to protect your data from
              unauthorized access, alteration, or disclosure. However, no online
              platform is entirely secure, so we recommend safeguarding your
              account credentials.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Your Rights
            </ParagraphLink1>
            <Paragraph1>
              You have the right to:
              <br />
              - Access the personal information we hold about you.
              <br />
              - Request corrections to inaccurate or outdated information.
              <br />
              - Request the deletion of your account and associated data.
              <br />
              To exercise these rights, please contact us using the details
              below.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Changes to this Policy
            </ParagraphLink1>
            <Paragraph1>
              We may update this Privacy Policy from time to time. Continued use
              of our website after any changes implies acceptance of the updated
              policy. Please review this page periodically for updates.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Contact Us
            </ParagraphLink1>
            <Paragraph1>
              If you have questions or concerns about our Privacy Policy, please
              contact our support team via email or through the contact form on
              our website.
            </Paragraph1>
          </div>
        </div>
        <Section6 />
      </div>
    </div>
  );
}

export default Overview;
