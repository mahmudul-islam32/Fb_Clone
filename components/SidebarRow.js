import Image from "next/image";

function SidebarRow(src, Icon, title) {
    return (
        <div>
            {src && (
              <Image 
              className="rounded-full cursor-pointer"
              src={session.user.image}
              width="40"
              height="40"
              layout="fixed"
              />
            )}
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}

            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
