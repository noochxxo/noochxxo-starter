import { Headphones } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface FAQ {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export const FAQSection = ({
  faqs
}: Props) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our pricing and plans.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <Button variant="outline" className="outline-btn">
            <Headphones />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};
