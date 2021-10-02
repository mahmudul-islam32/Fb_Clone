import InputBox from "./InputBox";
import Stories from "./Stories";

function Feed() {
    return (
        <div className="flex flex-grow justify-center">
            <div className="">
                <Stories />
                <InputBox />
               
            </div>
        </div>
    )
}

export default Feed
