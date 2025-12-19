export default function SectionTitle({ title, description }) {
    return (
        <div className='mt-40 flex flex-col items-center justify-center'>
            <h3 className='text-center sm:text-[32px] text-2xl font-semibold'>{title}</h3>
            <p className='mt-3 max-w-xs text-center text-gray-500 md:max-w-lg md:text-md text-sm'>{description}</p>
        </div>
    );
}
