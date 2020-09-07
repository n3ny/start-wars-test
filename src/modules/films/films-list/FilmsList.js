import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import { getFilms } from '../../../redux/actions/Films';
import { Link } from "react-router-dom";

const FilmsList = () => {
    const dispatch = useDispatch();
    const data = useSelector(store => store.films.data);

    useEffect(() => {
        if (data.length === 0)
        dispatch(getFilms());
    })

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item
                actions={[
                <Link to={{
                    pathname: '/naves',
                    state: {
                      data: item.starships
                    }
                  }}>Go
              </Link>
            ]}
              >
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.opening_crawl}
                    />
                </List.Item>
            )}
        />
    )
}

export default FilmsList;
