document.getElementById('leave-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const leaveData = {
        employeeName: document.getElementById('employee-name').value,
        leaveType: document.getElementById('leave-type').value,
        leaveStart: document.getElementById('leave-start').value,
        leaveEnd: document.getElementById('leave-end').value,
        leaveReason: document.getElementById('leave-reason').value
    };

    fetch('/api/leave-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(leaveData)
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});
