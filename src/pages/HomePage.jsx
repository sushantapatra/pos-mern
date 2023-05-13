import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DefaultLayout from '../components/DefaultLayout'


import { Col, Row } from 'antd';
import ItemList from '../components/ItemList';

const HomePage = () => {
    const [itmsData, setItmsData] = useState([])

    useEffect(() => {
        getAllItms()
    }, [])

    const getAllItms = async () => {
        try {
            const { data } = await axios.get('/api/items/get-item')
            setItmsData(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <DefaultLayout>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolor eligendi voluptas atque recusandae. Delectus sequi aut obcaecati dolor consequatur nisi ipsam dolores? Ea, molestiae deserunt? Corrupti iure reiciendis incidunt.</p>
                <Row>
                    {
                        itmsData.map(item => {
                            return (
                                <Col xs={24} sm={12} md={6} lg={6} key={item._id} >
                                    <ItemList item={item} />
                                </Col>
                            )
                        })
                    }

                </Row>


            </DefaultLayout>
        </>
    )
}

export default HomePage