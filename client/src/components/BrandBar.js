import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    onClick={() => device.setSelectedBrand(brand)}
                    className="p-3"
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;