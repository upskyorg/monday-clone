function DeleteBlock () {
  
  const deleteTicket = () => {
    console.log("Delete Tickets");
  }
  
  
  return (
      <div className="delete-block">
       <div className="delete-icon" onClick={deleteTicket}>ｘ</div>
      </div>
    )
  }
  
  export default DeleteBlock;