document.addEventListener("DOMContentLoaded", function() {
    const transactions = [
        { date: '2024-10-20', description: 'Investment A', amount: '$10,000', status: 'Completed' },
        { date: '2024-10-21', description: 'Dividend B', amount: '$1,200', status: 'Completed' },
        { date: '2024-10-22', description: 'Fee C', amount: '$150', status: 'Pending' },
    ];

    const transactionTable = document.getElementById('transaction-table');

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.status}</td>
        `;
        transactionTable.appendChild(row);
    });
});
