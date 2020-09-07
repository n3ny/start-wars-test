import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const SpaceshipsList = (props) => {
    const [list, setList] = useState([]);
    const [starshipsList, setStarshipsList] = useState([]);

    useEffect(() => {
        const { data } = props.location.state;
        setList(data);

        fetchStarship();
    }, [list])

    const fetchStarship = async () => {
        var naves = [];

        const temp = [
            "https://swapi.dev/api/starships/2/",
            "https://swapi.dev/api/starships/3/",
            "https://swapi.dev/api/starships/5/",
            "https://swapi.dev/api/starships/9/",
            "https://swapi.dev/api/starships/10/",
            "https://swapi.dev/api/starships/11/",
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/13/"
        ]

        temp.forEach(async element => {
            const response = await fetch(element);
            const starship = await response.json();

            naves = [...naves, { ...starship }]
            setStarshipsList(naves);
        });
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={starshipsList}
            renderItem={item => (
                    <Link to={{
                    pathname: '/upsert',
                    state: {
                      data: item
                    }
                  }}>
                <List.Item>
                    <List.Item.Meta
                        title={item.model}
                        description={item.name}
                    />
                </List.Item>
                    </Link>
            )}
        />
    )
};
export default SpaceshipsList;