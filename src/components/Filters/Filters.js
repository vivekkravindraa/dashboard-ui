import React from 'react';
import { Button, ButtonGroup, FormGroup, Input } from 'reactstrap';

import '../../assets/styles/Filters.scss';

export default function Filters() {
    return (
        <div className="filtersContainer">
            <div className="memberOverview">
                <p>Member Overview</p>
            </div>
            <div className="filterItems">
                <FormGroup className="group1" style={{ outline: 0 }}>
                    <Input type="select" name="select" id="select1">
                        <option>ABC LLC</option>
                        <option>ABC INC</option>
                        <option>ABC PVT LTD</option>
                    </Input>
                </FormGroup>
                <FormGroup className="group2">
                    <Input type="select" name="select" id="select2">
                        <option>All</option>
                        <option>Compliant</option>
                        <option>Non-Compliant</option>
                        <option>Eligible for FBI</option>
                    </Input>
                </FormGroup>
                <ButtonGroup className="yearGroup">
                    <Button onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>MTH</Button>
                    <Button onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>YTD</Button>
                    <Button onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>QTR</Button>
                </ButtonGroup>
                <FormGroup className="group3">
                    <Input type="select" name="select" id="select3">
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                    </Input>
                </FormGroup>
                <FormGroup className="group4">
                    <Input type="select" name="select" id="select4">
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
                    </Input>
                </FormGroup>
                <Button className="export" color="primary" onClick={(e) => { e.preventDefault() }} style={{ fontSize: 12 }}>Export</Button>
            </div>
        </div>
    )
}
