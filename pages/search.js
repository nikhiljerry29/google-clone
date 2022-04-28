import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
            </Head>

            <SearchHeader />
        </div>
    );
}
