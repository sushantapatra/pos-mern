import React from 'react'

import { Card, Button } from 'antd';
const { Meta } = Card;

const ItemList = ({ item }) => {
    return (
        <>
            <Card
                hoverable
                style={{ width: 240, marginBottom: 20 }}
                cover={<img alt={item.name} src={item.image} style={{ height: 200 }} />}
            >
                <Meta title={item.name} />
                <div className="item-button">
                    <Button type="primary">Add to cart</Button>
                </div>
            </Card>
        </>
    )
}

export default ItemList