import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        1. Prasības programmēšanā ir specifiskas nosacījumi,
        funkcijas vai īpašības, kas jāīsteno izstrādātajā
        sistēmā vai programmā, lai tā atbilstu lietotāju
        vai biznesa vajadzībām. Prasības tiek definētas
        projekta sākuma posmā un kalpo par ceļvedi visā
        izstrādes procesā.
        </p>
        <p>2. Prasību specifikācija programmēšanā ir dokumentēts
          apraksts, kas detalizēti definē un izskaidro visas prasības,
          kuras sistēmai vai programmatūrai jāizpilda. Tā ir svarīga
          sastāvdaļa programmatūras izstrādes procesā, jo tā kalpo
          kā ceļvedis izstrādātājiem, testētājiem un citiem iesaistītajiem,
          lai nodrošinātu, ka gala produkts atbilst lietotāja vai klienta
          vajadzībām un prasībām.
          </p>
          <p>3. Atšķirība starp prasībām un prasību specifikāciju programmēšanā
            ir būtiska, un to izpratne ir ļoti svarīga, lai veiksmīgi vadītu
            programmatūras izstrādes procesu.</p>
      </header>
    </div>
  );
}

export default App;
