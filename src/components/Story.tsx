import { FC } from "react"

interface StoryProps {
    img: string;
    name: string;
}

const Story: FC<StoryProps> = (props) => {
    const {img, name} = props;
    return (
        <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
            <div className="rounded-full bg-gradient-to-tl p-[3px] from-[yellow] via-[#0963f5]">
                <img 
                    className="block h-14 w-14 rounded-full overflow-hidden"
                    src={img} 
                    alt={name}
                />
            </div>
            <div className="text-xs font-light">
                {name}
            </div>
        </div>
    )
}
export default Story