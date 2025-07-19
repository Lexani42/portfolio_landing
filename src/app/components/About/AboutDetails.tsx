import classNames from "classnames";
import { useState } from "react";
import details from '@/data/aboutDetails.json'

export default function AboutDetails() {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <div>
            <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition cursor-pointer font-bold"
            >
                {showMore ? 'Hide' : 'Get to know me'}
            </button>

            {
                showMore && (
                    <div className={classNames(
                        'transition-all duration-500 ease-in-out overflow-hidden',
                        showMore ? 'max-h-[1000px] mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
                    )}>
                        <div className="border border-sky -600 rounded-xl p-6 bg-gray-700 text-left text-gray-200 shadow-lg">
                            {details.map((paragraph, idx) => (
                                <p className="mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}