import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './data';
import { SampleBase } from './sample-base';
export class CheckboxSelection extends SampleBase {
    constructor() {
        super(...arguments);
        this.selectionsettings = { persistSelection: true };
        this.toolbarOptions = ['Delete'];
        this.editSettings = { allowDeleting: true };
    }
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <GridComponent dataSource={data} ref={grid => this.gridInstance = grid} enableHover={false} allowPaging={true} pageSettings={{ pageCount: 5 }} selectionSettings={this.selectionsettings} toolbar={this.toolbarOptions} editSettings={this.editSettings}>
                        <ColumnsDirective>
                        <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                            <ColumnDirective field='OrderID' isPrimaryKey={true} headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
                            <ColumnDirective field='CustomerName' headerText='Customer Name' width='150'></ColumnDirective>
                            <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right'/>
                            <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
                            <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign="Right"></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Selection, Toolbar, Edit]}/>
                    </GridComponent>
                </div>
            </div>);
    }
}

render(<CheckboxSelection />, document.getElementById('sample'));