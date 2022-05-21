import TicketCard from "../components/TicketCard";

function Dashboard () {

  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Vide',
      owner: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      status: 'done',
      priority: 3,
      progress: 40,
      description: 'Hi this is  a few description for the project in question',
      timestamp: '2022-02-11T07:36:17+0000'
    },
    
    {
      category: 'Q2 2022',
      color: 'red',
      title: 'Bui and sell API',
      owner: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      status: 'working on it',
      priority: 2,
      progress: 70,
      description: 'Make video about API',
      timestamp: '2022-02-15T07:36:17+0000'
    }
  ]

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  console.log(uniqueCategories)

  return (
    <div className="dashboard">
      <h1>My projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;