import { Plus } from "lucide-react";

const faqData = [
    {
        id: 1,
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for 1-2 day delivery."
    },
    {
        id: 2,
        question: "What is your return policy?",
        answer: "We offer a 30-day hassle-free return policy. Items must be in their original packaging and unused condition to qualify for a full refund."
    },
    {
        id: 3,
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location and are calculated at checkout."
    },
    {
        id: 4,
        question: "How can I track my order?",
        answer: "Once your order ships, you will receive an email with a tracking number and a link to our tracking portal to monitor your package in real-time."
    },
    {
        id: 5,
        question: "Are my payment details secure?",
        answer: "Absolutely. we use industry-standard SSL encryption and partner with trusted payment processors like Stripe and PayPal to ensure your data is 100% protected."
    },
    {
        id: 6,
        question: "Can I change or cancel my order?",
        answer: "Orders can be changed or cancelled within 2 hours of placement. After that, the order enters the fulfillment process and cannot be modified."
    }
];


const FaqSection = () => {
    return (
        <div className=" flex flex-col items-center ">
            <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="group bg-white border border-neutral-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-300 cursor-pointer"
                    >
                        {/* Question Header */}
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-lg font-bold text-neutral-800">
                                {faq.question}
                            </h3>

                            {/* The Rotating Plus Icon */}
                            <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
                                <Plus size={24} className="text-neutral-400 group-hover:text-[#FE624C]" />
                            </div>
                        </div>

                        {/* Smooth Animated Content */}
                        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <p className="pt-4 text-neutral-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default FaqSection