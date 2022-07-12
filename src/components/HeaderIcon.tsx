import { FC } from "react";

interface HeaderIconProps {
    active?: boolean;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    IconActive: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

const HeaderIcon: FC<HeaderIconProps> = (props) => {
    const { Icon, IconActive, active } = props;
    const classNameIcons = `h-6 w-6 text-gray-900 active:text-gray-400 text-center sm:h-7 mx-auto`

    return (
        <div className="flex items-center cursor-pointer  sm:h-14
         rounded-xl active:text-red-400 group">
            {active ?
                <IconActive className={classNameIcons}/>
                :
                <Icon className = { classNameIcons} />
            }
        </div>
    )
}
export default HeaderIcon