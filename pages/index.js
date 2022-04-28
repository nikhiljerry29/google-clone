import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;
        router.push(`/search?term=${term}`);
    };

    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <Head>
                <title>Google Clone</title>
            </Head>

            <Header />

            <form className="flex flex-col items-center flex-grow mt-20 w-4/5">
                <img
                    loading="lazy"
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={300}
                    height={100}
                />
                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="focus:outline-none flex-grow"
                        autofocus
                    />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={search} className="button">
                        Google Search
                    </button>
                    <button onClick={search} className="button">
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>

            <Footer />
        </div>
    );
}
