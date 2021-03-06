import StoryCard from "./StoryCard";


const stories = [
    {
        name : "Mahmudul Islam",
        src: "https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name : "Mahmudul Islam",
        src: "https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    }
    ,{
        name : "Mahmudul Islam",
        src: "https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    }
    
];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">           
            {stories.map( (story) => (
                <StoryCard 
                key ={story.src} 
                name ={story.name} 
                src ={story.src} 
                profile ={story.profile} 
                />
            ))}
        <h1>test</h1>
            
        </div>
    );
}

export default Stories
