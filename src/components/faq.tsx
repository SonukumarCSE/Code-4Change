import React from 'react';

const FAQ: React.FC = () => {
    const toggleFAQ = (button: HTMLButtonElement) => {
        const content = button.nextElementSibling as HTMLElement;
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
        content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? `${content.scrollHeight}px` : "0";
    }

    return (
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="flex flex-col text-left basis-1/2">
                <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
                <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
            </div>
            <ul className="basis-1/2">
                <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget as HTMLButtonElement)}>
                        <span className="flex-1 text-base-content">Do I need to pay any money to register for the Hackathon ?</span>
                        <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                            <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                        </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                        <div className="pb-5 leading-relaxed">
                            <div className="space-y-2 leading-relaxed">No, You do not have to pay anything to anyone to register yourself for any Hackathon.</div>
                        </div>
                    </div>
                </li>
                {/* Add other FAQ items similarly */}
                
            </ul>
        </div>
    );
}

export default FAQ;
