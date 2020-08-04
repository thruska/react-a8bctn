import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Reorder
} from "@syncfusion/ej2-react-grids";
import { data } from "./data";
import { SampleBase } from "./sample-base";
export class CheckboxSelection extends SampleBase {
  constructor() {
    super(...arguments);
    this.selectionsettings = { persistSelection: true };
    this.toolbarOptions = ["Delete"];
    this.editSettings = { allowDeleting: true };

    this.state = { gridVisible: true };
  }
  render() {
    return (
      <div className="control-pane">
        <button
          onClick={() => {
            this.setState({ gridVisible: false });

            setTimeout(() => {
              this.setState({ gridVisible: true });
            }, 1000);
          }}
        >
          Reload
        </button>

        <div className="control-section">
          {this.state.gridVisible && (
            <GridComponent
              id={"myGrid"}
              dataSource={data}
              ref={grid => (this.gridInstance = grid)}
              enableHover={false}
              allowPaging={true}
              pageSettings={{ pageCount: 5 }}
              selectionSettings={this.selectionsettings}
              toolbar={this.toolbarOptions}
              editSettings={this.editSettings}
              enablePersistence={true}
              allowReordering={true}
            >
              <ColumnsDirective>
                <ColumnDirective type="checkbox" width="50" />
                <ColumnDirective
                  field="OrderID"
                  isPrimaryKey={true}
                  headerText="Order ID"
                  width="120"
                  textAlign="Right"
                />
                <ColumnDirective
                  field="CustomerName"
                  headerText="Customer Name"
                  width="150"
                />
              </ColumnsDirective>
              <Inject services={[Page, Selection, Toolbar, Edit, Reorder]} />
            </GridComponent>
          )}
        </div>
      </div>
    );
  }
}

render(<CheckboxSelection />, document.getElementById("sample"));
