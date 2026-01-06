/**
 * Each JavaScript object in the file represents a table in your database. For example, for the invoices table:
 */

const users = [
    {clientId: "CTBR-01", email: "imsourav123@gmail.com", name: "Sourav Nath", phoneNumber: "8787574638", profession: "Software Engineer"},
    {clientId: "CTBR-02", email: "john.doe@example.com", name: "John Doe", phoneNumber: "9876543210", profession: "Data Scientist"},
    {clientId: "CTBR-03", email: "jane.smith@example.com", name: "Jane Smith", phoneNumber: "1234567890", profession: "Product Manager"}
]

const donations = [
    {donationId: "DON-001", clientId: "CTBR-01", amount: 500, date: "2023-10-15", status: "Completed", donationFrequency: 2},
    {donationId: "DON-002", clientId: "CTBR-02", amount: 750, date: "2023-11-20", status: "Pending", donationFrequency: 1},
    {donationId: "DON-003", clientId: "CTBR-03", amount: 1200, date: "2023-12-18", status: "Completed", donationFrequency: 3}
]