import { Component, OnInit, Input } from '@angular/core';

export type tableContents = { columns: string[], rows: Array<{ [k: string]: string }>, pre: string, post: string }

@Component({
  selector: 'zek-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  @Input() data: { locales?: {[locale: string]: tableContents} } & tableContents;

  constructor(
  ) { }

  ngOnInit() { }

  renderRow(row: { [k: string]: string }): string {
    var rowStr: string = "";
    for (let x of this.data.columns) {
      rowStr += "<td>" + row[x] + "</td>";
    }
    return rowStr;
  }
  renderRows(): string {
    var rows: string[] = [];
    for (let row of this.data.rows){
      rows.push("<tr>" + this.renderRow(row) + "</tr>");
    }
    return rows.join("\n");
  }
  renderHeaders(): string {
    var rowStr: string = "";
    for (let x of this.data.columns) {
      rowStr += "<th>" + x + "</th>";
    }
    return rowStr;
  }
  renderTable(): string {
    return "<table><tr>" + this.renderHeaders() + "</tr>" + this.renderRows() + "</table>";
  }


}
