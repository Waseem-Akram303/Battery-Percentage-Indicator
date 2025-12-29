    const batteryLevel = document.getElementById("batteryLevel");
    const batteryText = document.getElementById("batteryText");
    const batteryInfo = document.getElementById("batteryInfo");


    // Check if Battery API is supported
    if (navigator.getBattery) {
        navigator.getBattery().then(function (battery) {

            function updateBattery() {
                // battery.level value 0 se 1 ke beech hoti hai
                const level = Math.floor(battery.level * 100);

                batteryLevel.style.width = level + "%";
                batteryText.textContent = level + "%";

                // Color change logic
                if (level <= 20) {
                    batteryLevel.style.backgroundColor = "red";
                } else if (level <= 50) {
                    batteryLevel.style.backgroundColor = "orange";
                } else {
                    batteryLevel.style.backgroundColor = "green";
                }
                if(battery.charging) {
                 batteryInfo.textContent = "🔌 Device is charging";
                }else{
                 batteryInfo.textContent = "🔋 This shows your device's current battery level";
                }
            }

            // Initial call
            updateBattery();

            // Jab battery change ho
            battery.addEventListener("eventname", updateBattery);
        });
    } else {
        batteryText.textContent = "Battery API not supported";
    }

