import Stories from "./Stories";

function Feed() {
    return (
        <div className="flex flex-grow justify-center">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories />
            </div>
        </div>
    )
}

export default Feed
