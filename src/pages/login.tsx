import React from 'react';

const Login = () => {
    const handleLoginWithOauth = () => {
        const rootUrl = process.env.API_URL + "/auth/clickUp";
        if (window.location.assign(`${rootUrl}`) != null) {
            alert("Redirecting ..... ");
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">{/* Your grid content */}</div>
                <div className="col-span-2 flex justify-center">
                    <button
                        onClick={handleLoginWithOauth}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login with Oauth
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login