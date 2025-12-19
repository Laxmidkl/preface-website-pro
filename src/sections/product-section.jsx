import { LaptopIcon, Building2Icon, UsersIcon, DropletsIcon, ArrowRightIcon } from 'lucide-react';
import SectionTitle from '../components/section-title';
import { Star } from 'lucide-react';

export default function ProductsSection() {
    const products = [
        {
            title: 'School Management Software',
            description: 'Manage students, staff, attendance, exams, and reports efficiently in one platform.',
            icon: LaptopIcon,
            gradient: 'from-blue-500 to-cyan-500',
            features: ['Student Management', 'Attendance Tracking', 'Exam Scheduling', 'Report Generation'],
            cta: 'Learn More'
        },
        {
            title: 'Campus Management Software',
            description: 'Streamline administrative processes for universities and colleges with automation and analytics.',
            icon: Building2Icon,
            gradient: 'from-purple-500 to-pink-500',
            features: ['Administrative Automation', 'Analytics Dashboard', 'Resource Management', 'Fee Collection'],
            cta: 'Explore Features'
        },
        {
            title: 'Water Supply Management',
            description: 'Efficiently monitor, manage, and optimize water supply operations for communities and municipalities.',
            icon: DropletsIcon,
            gradient: 'from-green-500 to-teal-500',
            features: ['Real-time Monitoring', 'Distribution Management', 'Billing System', 'Maintenance Tracking'],
            cta: 'See Demo'
        },
        {
            title: 'Cooperative Software',
            description: 'Manage members, accounts, transactions, and reports for cooperatives seamlessly.',
            icon: UsersIcon,
            gradient: 'from-orange-500 to-red-500',
            features: ['Member Management', 'Account Tracking', 'Transaction Processing', 'Financial Reports'],
            cta: 'Get Started'
        },
    ];

    return (
        <section>
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Our Products"
                    subtitle="Innovative Solutions"
                    description="Preface Technology Pvt. Ltd. offers cutting-edge software solutions to help organizations operate efficiently and scale effectively."
                    alignment="center"
                />
                
                <div className="mt-20 grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-lg cursor-pointer transition-all duration-500 overflow-hidden border-2 border-gray-200 hover:border-transparent"
                        >
                            {/* Gradient Background Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            {/* Icon Container */}
                            <div className="relative z-10 p-8 pb-6">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-sm bg-gradient-to-br ${product.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                    <product.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 pt-0">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                                    {product.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {product.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                            <Star className={`mr-3 size-4`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button onClick={() =>
                    alert(
                      "This feature is not available. Please wait a few days."
                    )
                  } className="group/btn w-full flex items-center justify-center gap-2 py-2 px-6 text-sm rounded-md border border-gray-200 hover:border-transparent bg-gray-50 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300">
                                    {product.cta}
                                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                                <div className="absolute inset-[2px] rounded-3xl bg-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}