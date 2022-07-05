

const SidebarMenuItem = ({ text, Icon,active }) => {
    return (
        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
            <Icon className="h-7" />
            <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
        </div>
    )
}

export default SidebarMenuItem