document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current UTC time
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById('utc-time').textContent = utcTime;
    }

    // Function to update the current day of the week
    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        document.getElementById('current-day').textContent = currentDay;
    }

    // Update time and day immediately and then every second
    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
});
