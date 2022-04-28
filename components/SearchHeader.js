import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

const SearchHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    return (
        <header className="">
            <img
                loading="lazy"
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                className="cursor-pointer"
                width={120}
                height={40}
                onClick={() => {
                    router.push("/");
                }}
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input
                    ref={searchInputRef}
                    className="flex-grow w-full focus:outline-none"
                    type="text"
                />
                <XIcon
                    className="h-7 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125 sm:mr-2"
                    onClick={() => (searchInputRef.current.value = "")}
                />
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            </form>
        </header>
    );
};

export default SearchHeader;
