import React, { useState } from 'react';
import { ArrowDown, ArrowRight } from "../data/Icons";

export default function HeaderDropdown({ label, options }) {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }

    return (
        <div className="relative">
            <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false" onClick={toggleExpand}>
                {label}
                {expand ? <ArrowDown/> : <ArrowRight/>}
            </button>
            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" hidden={!expand}>
                <div className="p-4">
                    {options.map(option => {
                        return (
                            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <ArrowRight/>
                                </div>
                                <div className="flex-auto">
                                    <a href={option.href} className="block font-semibold text-gray-900">
                                        {option.label}
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">{option.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}