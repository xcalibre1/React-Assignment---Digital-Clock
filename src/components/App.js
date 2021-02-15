
function App() {
  const now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);
  useEffect(() => {
    let id = setInterval(() => {
      let newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    });
    return () => clearInterval(id);
  }, [Time]);
  return <div className="Clock"><h3>{Time}</h3></div>;
}

export default App;
