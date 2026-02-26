// --- Xử lý Menu Mobile ---
const toggleMenu = () => {
    document.getElementById("myNav").classList.toggle("active");
};

// --- Bản đồ ---
const myLat = 10.8474402; 
const myLng = 106.7935116;

const map = L.map('map').setView([myLat, myLng], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

const marker = L.marker([myLat, myLng]).addTo(map);
marker.bindPopup("<b>Hè lô!</b><br>Đoán xem tôi đang ở đâu.").openPopup();

// --- Xử lý Chat Box ---
function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "flex";
        chatBox.style.animation = "zoomIn 0.3s ease";
    } else {
        chatBox.style.display = "none";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    var input = document.getElementById("userInput");
    var message = input.value.trim();
    var chatBody = document.getElementById("chatBody");

    if (message !== "") {
        var userDiv = document.createElement("div");
        userDiv.className = "chat-message user";
        userDiv.innerText = message;
        chatBody.appendChild(userDiv);

        input.value = ""; 
        chatBody.scrollTop = chatBody.scrollHeight; 

        setTimeout(function() {
            var botDiv = document.createElement("div");
            botDiv.className = "chat-message bot";
            botDiv.innerText = getBotResponse(message);
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("xin chào") || input.includes("hi")) {
        return "Chào bạn! Mình có thể giúp gì cho bạn?";
    } else if (input.includes("giá tour")) {
        return "Tour sẽ có giá từ 10-20 triệu ạ.";
    } else if (input.includes("địa chỉ")) {
        return "Công ty của chúng em là ở Thành Phố Hồ Chí Minh ạ.";
    } else {
        return "Cảm ơn bạn đã quan tâm. Nhân viên sẽ hỗ trợ bạn ngay!";
    }
}

// --- Xử lý cuộn mượt (Smooth Scroll) ---
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Đóng menu mobile sau khi nhấn
            const navMenu = document.getElementById("myNav");
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        }
    });
});