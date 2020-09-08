import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Table } from 'antd';
import { getFilms } from '../../../redux/actions/Films';
import { Link } from "react-router-dom";
import { VideoCameraOutlined } from '@ant-design/icons';

const columns = [
    {
        title: '',
        dataIndex: '',
        key: 'icon',
        render: () => <VideoCameraOutlined />,
    },
    {
        title: 'Film',
        dataIndex: 'title',
        key: 'film',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (item) => <Link to={{
            pathname: '/naves',
            state: {
              data: item.starships
            }
          }}>Show starship
      </Link>,
    },
];

const FilmsList = () => {
    const dispatch = useDispatch();
    const data = useSelector(store => store.films.data);

    useEffect(() => {
        if (data.length === 0)
            dispatch(getFilms());
    })

    return (
        <Table dataSource={data} columns={columns} />
    )
}

export default FilmsList;
