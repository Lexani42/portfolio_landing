import Image from "next/image";

export default function AboutAvatar() {
    return (
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg mx-auto">
            <Image 
                src='/images/profile.png'
                alt="Oleksii Syrov"
                fill
                className="object-cover object-bottom"
            />
        </div>
    );
}