export default function ProfileCard({ pictureUrl, name, role, links }) {
    return (
        <div class="bg-white shadow-xl rounded-lg p-5">
            <div class="photo-wrapper p-2">
                <img class="w-32 h-32 rounded-full mx-auto" src={pictureUrl} alt="" />
            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>{role}</p>
                </div>
            </div>
            <div class="flex justify-center mt-5">
                {Object.keys(links).map(link => (
                    <a href={links[link]} class="text-gray-400 hover:text-gray-900 mx-3">{link}</a>
                ))}
            </div>
        </div>
    );
}