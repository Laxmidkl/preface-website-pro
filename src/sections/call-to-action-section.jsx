import { ArrowRightIcon } from 'lucide-react';
import SectionTitle from '../components/section-title';

export default function CallToActionSection() {
    return (
        <section className='flex flex-col items-center justify-center sm:py-20 py-4'>
            <SectionTitle 
                title='Explore Preface Technology Solutions' 
                description='Discover innovative software solutions for schools, campuses, water supply systems, and cooperatives. Streamline operations and empower your organization.' 
            />
            <a 
                href='https://prefacetechnology.com' 
                className='mt-4 flex items-center gap-2 rounded-full bg-green-600 px-8 py-2.5 font-medium text-white transition hover:opacity-90'
            >
                Try Now
                <ArrowRightIcon className='size-5' />
            </a>
        </section>
    );
}
