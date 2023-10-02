import React from 'react';

async function getTicket_info(ids) {
  const res = await fetch(`http://localhost:4000/Geeks/${ids}`);

  if (!res.ok) {
    // Return JSX for "Not Found" page here
    return (
      <main>
        <div>
          <h1>Page Not Found</h1>
        </div>
      </main>
    );
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const dataDetails = await getTicket_info(params.id);

  if (!dataDetails || !dataDetails.Geekname) {
    // Handle the case where dataDetails is empty or does not contain Geekname
    return (
      <main>
        <div>
          <h1>Page Not Found</h1>
        </div>
      </main>
    );
  }

  console.log(dataDetails);

  return (
    <main>
      <div>
        <h1>{dataDetails.Geekname}</h1>
        <h1>{dataDetails.subject}</h1>
        <h2>{dataDetails.Articles}</h2>
      </div>
    </main>
  );
}
