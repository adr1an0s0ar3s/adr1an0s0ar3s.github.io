import { useEffect, useState } from "react";
import Header from "./components/Header";
import { GitHubProfilePictureUrl, GitHubUsername, HeaderOptions, ProfileCardLinks, ProfileCardName, ProfileCardRole } from "./data/Data";
import ProfileCard from "./components/ProfileCard";

export default function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [repos, setRepos] = useState([]);
    const [headerOptions, setHeaderOptions] = useState(HeaderOptions);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GitHubUsername}/repos`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let fetched_repos = result.map((item => ({
                        label: item.name,
                        description: item.description ? item.description : "",
                        url: item.html_url,
                        language: item.language,
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
        <div className="flex flex-col h-screen">
            <Header options={headerOptions} />
            <main className="flex-1 bg-gradient-to-b from-gray-200 to-white">
                <div className="flex items-center h-full justify-center">
                    <div className="max-w-xs">
                        <ProfileCard
                            pictureUrl={GitHubProfilePictureUrl}
                            name={ProfileCardName}
                            role={ProfileCardRole}
                            links={ProfileCardLinks}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

