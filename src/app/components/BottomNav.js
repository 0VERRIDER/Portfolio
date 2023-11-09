export default function BottomNav(){
    return(
        <div className="flex flex-row w-full h-20 backdrop-blur-sm fixed bottom-0 left-0 justify-between items-center px-5">
            <div className="flex flex-row border-white border rounded-full items-center justify-evenly w-auto px-3 h-10">
                <div className="status-color bg-green-500 rounded-full mr-2 h-5 w-5"></div>
                <div className="status-text text-white font-normal lowercase">online</div>
            </div>
        </div>
    )
}