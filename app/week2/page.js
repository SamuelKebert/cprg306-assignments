import Link from "next/link";
import Studentinfo from "../schoolinfo"

export default function Page(){
   return (<main>
     <h1>My Shopping List</h1>
     <Studentinfo/>
     <Link href="/">Home</Link>
     </main>)
};