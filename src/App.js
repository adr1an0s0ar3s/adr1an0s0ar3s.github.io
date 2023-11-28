import { useEffect, useState } from "react";
import Header from "./components/Header";
import { GitHubProfilePictureUrl, HeaderOptions, ProfileCardLinks, ProfileCardName, ProfileCardRole } from "./data/Data";
import ProfileCard from "./components/ProfileCard";

export default function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [repos, setRepos] = useState([]);
    const [headerOptions, setHeaderOptions] = useState(HeaderOptions);

    useEffect(() => {
        fetch("https://api.github.com/users/adr1an0s0ar3s/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let fetched_repos = result.map((item => ({
                        label: item.name,
                        description: item.description ? item.description : "",
                        href: item.html_url,
                    })));
                    setRepos(fetched_repos);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    useEffect(() => {
        console.log(repos);
        setHeaderOptions({
            Projects: repos,
            ...HeaderOptions,
        });
    }, [repos]);

    return (
        <>
            <Header options={headerOptions} />
            <body className="h-screen bg-gradient-to-b from-gray-200 to-white">
                <div class="flex items-center h-screen w-full justify-center">
                    <div class="max-w-xs">
                        <ProfileCard pictureUrl={GitHubProfilePictureUrl} name={ProfileCardName} role={ProfileCardRole} links={ProfileCardLinks}/>
                    </div>
                </div>
            </body>
        </>
    );
}

