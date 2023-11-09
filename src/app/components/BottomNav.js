import { Bars3Icon } from '@heroicons/react/24/solid';

export default function BottomNav(){
    return(
        <div className="flex flex-row w-full h-20 backdrop-blur-sm fixed bottom-0 left-0 justify-between items-center px-5">
            <div className="flex flex-row border-white border rounded-full items-center justify-evenly w-auto px-3 h-9">
                <div className="status-color bg-green-500 rounded-full mr-2 h-4 w-4"></div>
                <div className="status-text text-sm text-white font-normal lowercase">online</div>
            </div>
            <div className="">
                <Bars3Icon className="text-white h-9 w-9 border border-white p-1 rounded" />
            </div>
        </div>
    )
}