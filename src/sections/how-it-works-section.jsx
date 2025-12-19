import SectionTitle from '../components/section-title';
import {
  CogIcon,
  DatabaseIcon,
  UsersIcon,
} from 'lucide-react';

export default function HowItWorksSection() {
  const data = [
    {
      title: 'Easy Setup',
      description: 'Get your institution’s software running within minutes — simple, guided installation with no technical hassle.',
      icon: CogIcon,
    },
    {
      title: 'Integrated Management',
      description: 'Manage school, cooperative, or water supply data in one place with seamless digital automation.',
      icon: DatabaseIcon,
    },
    {
      title: 'Dedicated Support',
      description: 'Our expert team provides continuous training, updates, and local support to ensure smooth operation.',
      icon: UsersIcon,
    },
  ];

  return (
    <section className="flex flex-col container mx-auto px-4 items-center justify-center">
      <SectionTitle
        title="How It Works"
        description="Preface Technology Pvt. Ltd. offers smart, easy-to-use software solutions that digitalize your institution’s daily operations."
      />

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-[14px] bg-gray-200/80 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative flex max-w-80 flex-col items-center rounded-xl bg-white p-6 pb-10">
              <div className="absolute -top-6 rounded-full bg-green-600 p-3">
                <item.icon className="size-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg text-center font-medium">
                {item.title}
              </h3>
              <p className="mt-4 text-center text-sm text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
