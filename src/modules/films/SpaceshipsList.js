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

        list.forEach(async element => {
            const endpoint = element.replace('http', 'https');        

            const response = await fetch(endpoint);
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