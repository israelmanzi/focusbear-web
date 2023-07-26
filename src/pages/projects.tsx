import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalstorage";

const Project: React.FC = () => {
    const [profile] = useLocalStorage<any>("profile", {});
    let { portalId } = useParams();
    const [projects, setProjects] = useState([]);
    const [accessToken] = useLocalStorage("access_token", "");
    const handleGetProjects = async () => {
        try {
            console.log(
                "🚀 ~ file: index.tsx:17 ~ handleCallback ~ Access-Token:",
                accessToken
            )
            const rootUrl = `${process.env.API_URL + '/portals/workspaces/all'}`;
            const response = await fetch(rootUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const result = await response.json();
            if (result?.teams) {
                setProjects(result?.teams);
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: index.tsx:17 ~ handleCallback ~ error:",
                error
            );
        }
    };

    useEffect(() => {
        handleGetProjects();
    }, []);
    console.log("The project array:", projects)
    return (
        <div className="h-screen justify-center items-center">
            <h1 className="text-4xl py-6 text-center">Projects</h1>
            <div>
                {projects ? projects.map((project: any) => (
                    <div
                        key={project.id}
                        className="w-screen flex justify-center items-center"
                    >
                        <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
                            <div className="card flex flex-col justify-center items-center p-10 bg-white rounded-lg shadow-2xl">
                            <div className="flex items-center justify-center text-white flex-col h-12 w-12 rounded-full" style={{backgroundColor: project.color}}>
                                    <h1>{project.name.charAt(0)}</h1>
                                </div>
                                <div className="prod-title">
                                    <p className="uppercase text-sm text-gray-400">
                                        {project.name}
                                    </p>
                                </div>
                                <div>
                                <p className="text-[10px] uppercase font-semibold">
                                        Owners: 
                                        <span className="text-gray-400 inline-block space-y-4">
                                            {project.members.map((member: any) => (member?.user.email)).join(', ')}   
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : 
                <div>
                    <h1>No projects found</h1>
                </div>}
            </div>
        </div>
    );
};

export default Project;
