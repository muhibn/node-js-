import Link from "next/link";

async function getTicket() {
    const res=await fetch('http://localhost:4000/Geeks',{
        next: {
            revalidate:3000
        }})

   
        return    res.json()
    
}
export default async function () {
    const datas=await getTicket();

  return (
    <>
        {datas.map((tickets) =>(
           
           <div className="container" key={tickets.id}>
            <Link href={`/Ticket/`+tickets.id}>
            <h1>{tickets.Geekname}</h1>
            <h3>{tickets.subject}</h3>
            </Link>
           </div>
           

        ))

        }
    </>
  )
}
