export default function HeaderOption({ label, href }) {
    return (
        <a href={href} type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {label}
        </a>
    );
}