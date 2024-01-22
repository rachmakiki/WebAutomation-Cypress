class editAddress {
    chngBilling = '.box-address-billing > .box-actions > .action > span'
    phone = '#telephone'
    street = '#street_1'
    city = '#city'
    country = '#country'
    region = '#region'
    zip = '#zip'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    successMsg = '.message-success > div'
    errorMsg_phone = '#telephone-error'
    errorMsg_street = '#street_1-error'
    errorMsg_city = '#city-error'
    errorMsg_zip = '.control > .message'
}
export default new editAddress()