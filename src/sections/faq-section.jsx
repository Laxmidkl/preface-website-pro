import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/section-title';

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(null);

    const data = [
        {
            question: 'Do I need technical experience to use Preface Technology solutions?',
            answer: "Not necessarily! While basic knowledge of software or IT can help, our solutions are designed to be user-friendly and ready-to-use without deep technical expertise.",
        },
        {
            question: 'What kind of software does Preface Technology Pvt. Ltd provide?',
            answer: 'We provide digital solutions for schools, campuses, water supply management, and cooperative organizations, all tailored to streamline operations efficiently.',
        },
        {
            question: 'Can I integrate Preface Technology software into my existing systems?',
            answer: 'Yes! Our solutions are designed for seamless integration with existing infrastructure and support customization to fit your organization’s needs.',
        },
        {
            question: 'How flexible and customizable are your solutions?',
            answer: 'All our software solutions are highly adaptable with configurable features, scalable architecture, and customizable modules to match your workflows.',
        },
        {
            question: 'Does Preface Technology support collaborative work for teams?',
            answer: 'Absolutely. Our software is built to facilitate teamwork, enabling multiple users to manage data and processes efficiently in a collaborative environment.',
        },
        {
            question: 'Can I try Preface Technology products before purchasing?',
            answer: 'Yes, we offer trial access so you can explore the features and see how our solutions fit your organization before making a commitment.',
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center py-16 container mx-auto px-4'>
            <SectionTitle
                title="Frequently Asked Questions"
                description="Find answers to common queries about Preface Technology Pvt. Ltd. solutions below."
            />
            <div className='mx-auto mt-12 w-full max-w-xl'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col border-b border-gray-200 bg-white'>
                        <h3
                            className='flex select-none cursor-pointer items-start justify-between gap-4 py-4 font-medium'
                            onClick={() => setIsOpen(isOpen === index ? null : index)}
                        >
                            {item.question}
                            {isOpen === index ? <MinusIcon className='size-5 text-gray-500' /> : <PlusIcon className='size-5 text-gray-500' />}
                        </h3>
                        <p className={`pb-4 text-sm/6 text-gray-500 ${isOpen === index ? 'block' : 'hidden'}`}>
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
