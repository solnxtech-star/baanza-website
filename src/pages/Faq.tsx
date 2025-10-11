import React from "react";
import { Faq_card } from "./Faq/Faq_card";
import { Still_have_questions } from "./Faq/Still_have_questions";

const faq_data = [
  {
    id: 1,
    faq_head_text: "Getting Started",
    faq_title_content: [
      "How do I start selling my recyclables on Baanza?",
      "Is there a fee to use Baanza?",
      "What types of materials can I sell?",
    ],
    faq_answers: [
      "To start selling, sign up on Baanza, list your recyclables, and connect with a Baanza Pro for pickup and payment.",
      "No, using Baanza is completely free for sellers. Baanza only charges a small commission to Pros.",
      "You can sell a variety of materials including plastics, metals, glass, and electronic waste. Check the accepted materials list in your dashboard.",
    ],
  },
  {
    id: 2,
    faq_head_text: "Selling Process",
    faq_title_content: [
      "How do I know if my materials are worth selling?",
      "How do I prepare my recyclables for pickup?",
      "When do I get paid?",
    ],
    faq_answers: [
      "Baanza provides estimated prices for materials based on type and weight. You can also compare offers from different Pros before confirming.",
      "Sort and clean your recyclables to improve quality and pricing. Make sure items are separated into categories such as plastic, glass, or metal.",
      "Once a Baanza Pro confirms pickup and the materials are verified, payment is processed instantly to your account within 24 hours.",
    ],
  },
  {
    id: 3,
    faq_head_text: "Baanza Pros",
    faq_title_content: [
      "How do I know if a Baanza Pro is trustworthy?",
      "What if a Baanza Pro doesn’t show up for pickup?",
      "Can I negotiate prices with Baanza Pros?",
    ],
    faq_answers: [
      "Every Baanza Pro is verified through our vetting process, including ID checks and performance ratings from past transactions.",
      "If a Pro fails to show up, you can report the issue directly from your dashboard, and our support team will reassign your request.",
      "Yes, you can chat and negotiate prices directly within the app before confirming a deal.",
    ],
  },
  {
    id: 4,
    faq_head_text: "Account & Support",
    faq_title_content: [
      "How do I update my account information?",
      "What if I have a problem with a transaction?",
      "Can I delete my account?",
    ],
    faq_answers: [
      "Go to ‘Account Settings’ in your dashboard to update your name, contact info, or payment details.",
      "If you experience any transaction issues, contact Baanza Support through the Help Center. We’ll investigate and resolve it promptly.",
      "Yes, you can delete your account anytime from your settings. Note that your transaction history will be permanently removed.",
    ],
  },
  {
    id: 5,
    faq_head_text: "Business Users",
    faq_title_content: [
      "Do you offer services for businesses?",
      "Can I schedule regular pickups?",
      "Do you provide recycling reports for compliance?",
    ],
    faq_answers: [
      "Yes, Baanza offers tailored recycling and waste management solutions for businesses and organizations.",
      "Businesses can schedule one-time or recurring pickups directly from the Baanza Business Dashboard.",
      "Absolutely! Baanza provides detailed recycling and compliance reports to help your business meet environmental standards.",
    ],
  },
];

export const Faq: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-14">
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
          Frequently Asked Questions
        </h5>
        <p className="max-w-2xl mx-auto text-[#616161] text-base md:text-xl leading-relaxed">
          Find answers to common questions about using Baanza.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-5xl mx-auto">
        {faq_data.map((item) => (
          <Faq_card
            key={item.id}
            faq_head={item.faq_head_text}
            faq_title_content={item.faq_title_content}
            faq_answers={item.faq_answers}
          />
        ))}
      </div>
      <Still_have_questions />
    </section>
  );
};
