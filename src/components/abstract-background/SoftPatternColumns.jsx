"use client";

const SoftPatternColumns = () => {
    return (
        <div className='absolute inset-0 pointer-events-none'>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 flex px-28">
                <div className="bg-[#e6dbb71e] w-68 h-68 rotate-45" />
                <div className="bg-[#E6DBB74D] w-68 h-68 rotate-45 -ml-28" />
                <div className="bg-[#E6DBB733] w-68 h-68 rotate-45 -ml-28" />
                <div className="bg-[#e6dbb71e] w-68 h-68 rotate-45 -ml-28" />
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 right-0 flex gap-6 px-28'>
                <div className='bg-[#e6dbb71e] w-68 h-68 rotate-45'></div>
                <div className='bg-[#E6DBB74D] w-68 h-68 rotate-45 -ml-28'></div>
                <div className='bg-[#E6DBB733] w-68 h-68 rotate-45 -ml-28'></div>
                <div className='bg-[#e6dbb71e] w-68 h-68 rotate-45 -ml-28'></div>
            </div>
        </div>
    );
};

export default SoftPatternColumns;