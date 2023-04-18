export default function View() {


    //tähän jotenkin toteutus että haetaan tietokannasta urlin perusteella jne... ??? ei hajuakaan miten
    const [view, setView] = useState([]);


    axios.get(Constants.API_ADDRESS + {
        url: url,
    }). then(response => {
        console.log(response.data);
        setView(response.data);
    })
} 