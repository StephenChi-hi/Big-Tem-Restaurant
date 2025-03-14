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
    <div className="pt-[10px] bg-bg_gray">
      <div data-aos="flip-right" className="container1">
        <div className="relative overflow-hidden">
          <div className="flex flex-col bg-primary sm:gap-[20px] px-4 sm:p-[65px] py-12 mt-[50px]  w-full sm:text-center text-white">
            <Header1Plus>Terms and Conditions</Header1Plus>
            <Paragraph3>
              Welcome to Lala Healthy Foods! By using our website and services,
              you agree to the following terms and conditions. Please read them
              carefully to ensure a smooth and enjoyable experience ordering
              healthy meals online.
            </Paragraph3>
          </div>
          <div className="absolute hidden sm:-bottom-[200px] -bottom-[60px] overflow-hidden flex- w-full">
            <img
              className="min-w-full"
              src="/images/white_bgR.svg"
              alt="terms and conditions"
            />
          </div>
        </div>

        <div className="py-4 sm:py-[50px] rounded-b-[24px] text-p_black z-[10] bg-white px-4 sm:px-[65px] space-y-[18px] sm:space-y-[32px]">
          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Use of Website
            </ParagraphLink1>
            <Paragraph1>
              By accessing Lala Healthy Foods, you agree to use our platform for
              lawful purposes only. Any misuse, such as attempting to harm the
              website or its users, is strictly prohibited.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Account Responsibility
            </ParagraphLink1>
            <Paragraph1>
              Users are responsible for maintaining the confidentiality of their
              account details, including passwords. Please notify us immediately
              if you suspect unauthorized access or a security breach.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Orders and Payments
            </ParagraphLink1>
            <Paragraph1>
              - Order Confirmation: Orders placed on Lala Healthy Foods are
              subject to availability. We reserve the right to cancel orders for
              any reason, including errors in pricing or stock levels.
              <br />- Payment: All payments must be completed at checkout.
              Accepted payment methods include credit/debit cards and other
              secure options as listed on our website.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Shipping and Delivery
            </ParagraphLink1>
            <Paragraph1>
              We strive to deliver your orders promptly and accurately. Delivery
              times may vary based on your location and order volume. Delivery
              charges, timelines, and pickup options are displayed during
              checkout.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Returns and Refunds
            </ParagraphLink1>
            <Paragraph1>
              - Eligibility: Returns or refunds are only applicable for
              incorrect or defective orders. Requests must be made within 24
              hours of delivery.
              <br />
              - Refunds: Approved refunds will be processed to the original
              payment method. Please note that delivery charges are
              non-refundable.
              <br />- Exclusions: Perishable or customized meal orders are not
              eligible for returns or refunds.
            </Paragraph1>
          </div>

          <div className=" hidden">
            <ParagraphLink1 className="font-bold text-primary">
              Intellectual Property
            </ParagraphLink1>
            <Paragraph1>
              All content on GrandioseGrin, including images, text, and
              branding, is owned by us or our licensors. Any unauthorized use of
              our intellectual property is prohibited.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Limitation of Liability
            </ParagraphLink1>
            <Paragraph1>
              Lala Healthy Foods is not liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              services, to the maximum extent permitted by law.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Changes to Terms
            </ParagraphLink1>
            <Paragraph1>
              We may update these terms periodically. Continued use of our
              website implies acceptance of any changes. Please review these
              terms regularly for updates.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Contact Us
            </ParagraphLink1>
            <Paragraph1>
              If you have any questions about our terms and conditions, feel
              free to reach out to our support team via email or the contact
              form on our website.
            </Paragraph1>
          </div>
        </div>
        <Section6 />
      </div>
    </div>
  );
}

export default Overview;
