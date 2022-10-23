import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return `
        <div class="row">
        <div class="row-info">

        </div>
        <div class="row-data">
          <div class="column">a</div>
        </div>
        <div class="row-data">
          <div class="column">b</div>
        </div>
        <div class="row-data">
          <div class="column">c</div>
        </div>
      </div>
      <div class="row">
        <div class="row-info">
          1
        </div>
        <div class="row-data">
          <div class="cell selected" contenteditable>A1</div>
          <div class="cell" contenteditable>A2</div>
          <div class="cell" contenteditable="">A3</div>
        </div>
      </div>
        `
    }
}