import SearchItem from "./searchItem.tsx";

interface City{
    id: number,
    name: string,
    image: string
}

const searchResultsContainer = () => {
    let cities:City[] = [
        {
            "id":0,
            "name":"Paris",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
        },
        {
            "id":1,
            "name": "Vienna",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stephansdom_Wien_2022-08-08_13.jpg/250px-Stephansdom_Wien_2022-08-08_13.jpg"
        }
    ];

    cities.forEach((city) => {
        return <SearchItem id={city.id} name={city.name} image={city.image}/>
    });
}

export default searchResultsContainer();