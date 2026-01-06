import { User } from "lucide-react";
import { WorkflowIcon } from "lucide-react";
import { BarChart } from "lucide-react";


export default function OverView() {


    return(
        <div className="grid grid-cols-4 gap-4 p-4 w-full">
        <div className= "h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"> 
        <h1>Contributors
           <span className="text-2xl font-bold"> (1500) </span> 
        </h1>
        </div>
        <div className= "h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"> 
        <h1>Projects 
            <span className="text-2xl font-bold"> (4) </span> 
        </h1>
        </div>
        <div className= "h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"> 
        <h1>Fulfilled 
            <span className="text-2xl font-bold"> (1100) </span> 
        </h1>
        </div>
        <div className= "h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"> 
        <h1>Pending
            <span className="text-2xl font-bold"> (300) </span>  </h1>
        </div>
        </div>
    )
}