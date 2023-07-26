import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useRouter } from "next/router";

const withAuth = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    const WithAuth: React.FC<P> = (props) => {
        const navigate = useRouter();
        // const [loading, setLoading] = useState("loading", false);
        const [isLoggedIn, setIsLoggedIn] = useLocalStorage(
            "isLoggedIn",
            false
        );

        useEffect(() => {
            if (isLoggedIn && ['/login','/callback'].includes(window.location.pathname)) {
                navigate.push("/projects");
            }
            if (!isLoggedIn) {
                navigate.push("/login");
            }
        }, [isLoggedIn]);

        return <WrappedComponent {...(props as P)} />;
    };

    return WithAuth;
};

export default withAuth;
