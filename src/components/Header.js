import logo from "../assets/logo.png"
import HeaderDropdown from "./HeaderDropdown";
import HeaderOption from "./HeaderOption";

export default function Header({ options }) {
    return (
        <header className="bg-gray-200">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8">
                <div className="flex flex-1">
                    <img className="h-10 w-auto" src={logo} alt=""/>
                </div>
                <div className="flex gap-x-12">
                    {Object.keys(options).map(option => {
                        if (Array.isArray(options[option])) {
                            return (
                                <HeaderDropdown label={option} options={options[option]}/>
                            );
                        } else {
                            return (
                                <HeaderOption label={option} href={options[option]}/>
                            );
                        }
                    })}
                </div>
                <div className="flex flex-1 justify-end"></div>
            </nav>
        </header>
    )
}
