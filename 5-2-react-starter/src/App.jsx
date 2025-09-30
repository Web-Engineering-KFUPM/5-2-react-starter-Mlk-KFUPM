import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <h1>Student Info</h1>
          <StudentCard name="Abdulmalik Alsafadi" id="202257020" dept="SWE" />
          <StudentCard name="Faris Alshahrani" id="202277660" dept="ICS" />
        </div>
      </main>
    </div>
  );
}

export default App;
