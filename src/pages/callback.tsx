import React, {useEffect} from "react";
import {useLocalStorage} from "@/hooks/useLocalstorage";
import withAuth from "@/hoc/with-auth-redirect";
import {useRouter} from "next/router";


const ClickupCallback: React.FC = () => {
    const navigate = useRouter();
    const [accessToken, setAccessToken] = useLocalStorage("access_token", "");
    // let [searchParams] = useSearchParams();
    const handleCallback = async () => {
        try {
            const queryString = navigate.asPath.split('?')[1];
            const queryParams = new URLSearchParams(queryString);
            const fullQueryString = queryParams.toString();
            const rootUrl = process.env.API_URL + `/auth/clickUp/callback?${fullQueryString}`;
            const response = await fetch(rootUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if (result.access_token) {
                console.log('Access Token:', result.access_token);
                setAccessToken(result.access_token);
                // const rootUrl = 'http://localhost:4000' + `/auth/profile`;
                // const response = await fetch(rootUrl, {
                //     method: 'GET',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // });
                navigate.push("/projects");
            }
        } catch (error) {
            console.log("🚀 ~ file: index.tsx:17 ~ handleCallback ~ error:", error);
        }
    };

    useEffect(() => {
        handleCallback();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl">Authenticating..</h1>
        </div>
    );
};

export default withAuth(ClickupCallback);
