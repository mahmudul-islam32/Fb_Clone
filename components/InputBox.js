import { useSession } from 'next-auth/client';
import Image from 'next/image';

function InputBox() {
    const [session] = useSession();
    return (
        <div>
            <div className="flex space-x-4 p-4 items-center">
            <Image 
            className="rounded-full"
            src={session.user.image}
            width="40"
            height="40"
            layout="fixed"
            />
            </div>
            
        </div>
    );
}

export default InputBox;