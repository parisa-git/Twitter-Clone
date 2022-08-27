import Link from "next/link"


const SidebarMenuItem = ({ text, Icon,active,link}) => {
    return (
        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
            <Icon className="h-7" />
            <Link href=""><span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span></Link>
        </div>
    )
}

export default SidebarMenuItem