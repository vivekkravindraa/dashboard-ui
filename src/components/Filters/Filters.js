import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

import '../../assets/styles/Filters.scss';

export default function Filters() {
    return (
        <div className="filtersContainer">
            <div className="memberOverview">
                <p></p>
            </div>
            <div className="filterItems">
                <Form.Group className="group1" style={{ outline: 0 }}>
                    <Form.Control as="select" name="select" id="select1">
                        <option>ABC LLC</option>
                        <option>ABC INC</option>
                        <option>ABC PVT LTD</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="group2">
                    <Form.Control as="select" name="select" id="select2">
                        <option>All</option>
                        <option>Compliant</option>
                        <option>Non-Compliant</option>
                        <option>Eligible for FBI</option>
                    </Form.Control>
                </Form.Group>
                <ButtonGroup className="yearGroup">
                    <Button className="btn btn-info" onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>MTH</Button>
                    <Button className="btn btn-info" onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>YTD</Button>
                    <Button className="btn btn-info" onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>QTR</Button>
                </ButtonGroup>
                <Form.Group className="group3">
                    <Form.Control as="select" name="select" id="select3">
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="group4">
                    <Form.Control as="select" name="select" id="select4">
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </Form.Control>
                </Form.Group>
                <Button className="export" color="primary" onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>Export</Button>
            </div>
        </div>
    )
}
