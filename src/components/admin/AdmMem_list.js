const AdmMem_list=()=>{
    return(
        
        <>
        <table className="container table table-striped">
        <thead>
    <tr>
      <th scope="col">Membership ID</th>
      <th scope="col">Member Name</th>
      <th scope="col">Plan</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        </table>
        </>
    );
}

export default AdmMem_list;