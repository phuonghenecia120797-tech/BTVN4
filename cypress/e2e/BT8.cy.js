describe('Get table data as array of objects', () => {
  it('Should get all table values', () => {
    cy.visit('https://practice.expandtesting.com/challenging-dom')

    const tableData = []

    cy.get('table tbody tr').each(($row) => {
      const rowData = {}

      cy.wrap($row).find('td').each(($cell, index) => {
        const headers = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']

        if (index < headers.length) {
          rowData[headers[index]] = $cell.text().trim()
        }
      }).then(() => {
        tableData.push(rowData)
      })
    }).then(() => {
      cy.log(JSON.stringify(tableData))
      expect(tableData.length).to.be.greaterThan(0)
    })
  })
})
