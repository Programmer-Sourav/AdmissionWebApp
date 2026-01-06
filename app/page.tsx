import Image from "next/image";
import Header from "./header";
import OverView from "./overview";
import Users from "./users";
import Charts from "./charts";
import ApplicationForm from "./application-form";

export default function Home() {
  return (
    <div>
      <main>
        {/* <Header/>
        <div className="mt-24 flex min-h-screen flex-col items-center">
        <OverView/>
        <div className="flex flex-row w-full">
        <div className="flex flex-col w-[60%] m-4"> 
          <Users/>
        </div>
         <div className="flex flex-col w-[40%] m-4"> 
          <Charts/>
        </div>
        </div>
        </div> */}
        <ApplicationForm />
      </main>
    </div>
  );
}
