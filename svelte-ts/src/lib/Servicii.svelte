<div id="servicii" class="servicii">
  <div class="title">
    <h2>Servicii</h2>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Sedinta</th>
          <th>Pret (RON)</th>
          <th>Durata (Min)</th>
          <th>Locatie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Psihoterapie individuala</td>
          <td>200</td>
          <td>50</td>
          <td>Online/Cabinet</td>
        </tr>
        <tr>
          <td
            >Abonament Psihoterapie <br />(4 sedinte cu valabilitate 30 zile)</td
          >
          <td>600</td>
          <td>50</td>
          <td>Online/Cabinet</td>
        </tr>
        <tr>
          <td>Consiliere psihologica</td>
          <td>150</td>
          <td>50</td>
          <td>Online/Cabinet</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
  .servicii {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 25rem; /* 550px */
    display: flex; /* Use flexbox to center the image horizontally and vertically */
    flex-direction: column;
    justify-content: space-evenly; /* Center the image horizontally within the div */
    align-items: center;
  }

  .title {
    padding: 1rem;
  }
  
  .title h2 {
    background-color: white;
    color: black;
    text-align: center;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
  }

  .table-container {
    background-color: white;
    height: 200px;
    width: auto;
    text-align: center;
    font-size: 0.8125rem;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    overflow-x: scroll;
  }

  .table-container table {
    min-width: 650px;
  }

  .table-container thead th {
    background-color: #e3d8cb;
    color: black;
    text-align: center;
    font-size: 0.8125rem;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
  }

  .table-container tbody td {
    text-align: center;
    font-size: 0.8125rem;
    padding: 0.625rem 1.125rem;
    border-bottom: 1px solid #dddddd;
  }

  @media (max-width: 800px){
    .table-container {
        width: 80%;
    }
  }
</style>
