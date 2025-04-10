// JavaScript to handle form functionality
function addExpertiseField() {
    const expertiseList = document.querySelector('.expertise-list');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'expertise-item';
    newInput.placeholder = 'New Expertise';
    expertiseList.insertBefore(newInput, expertiseList.lastElementChild);
}

function addEducationField() {
    const educationSection = document.querySelector('.education-section');
    const newEducationItem = document.createElement('div');
    newEducationItem.className = 'education-item';
    newEducationItem.innerHTML = `
        <input type="text" class="education-year" placeholder="Year">
        <input type="text" class="education-degree" placeholder="Degree">
        <input type="text" class="education-school" placeholder="University/School">
    `;
    educationSection.insertBefore(newEducationItem, educationSection.lastElementChild);
}

function resetForm() {
    if(confirm('Are you sure you want to reset the form? All changes will be lost.')) {
        document.getElementById('profile-form').reset();
    }
}

// Handle image upload preview
document.getElementById('profile-image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatarPreview = document.getElementById('profile-avatar-preview');
            avatarPreview.innerHTML = '';
            avatarPreview.style.backgroundImage = `url(${e.target.result})`;
            avatarPreview.style.backgroundSize = 'cover';
            avatarPreview.style.backgroundPosition = 'center';
        }
        reader.readAsDataURL(file);
    }
});

// Handle form submission
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically send the data to your server
    alert('Profile saved successfully!');
});
function toggleVideoCall() {
    const videoCall = document.getElementById('video-call');
    const chatArea = document.getElementById('chat-message-area');
    const chatInput = document.querySelector('.chat-input');
    
    if (videoCall.style.display === 'none') {
        // Show video call, hide chat
        videoCall.style.display = 'flex';
        chatArea.style.display = 'none';
        chatInput.style.display = 'none';
        showToast("Video call started");
    } else {
        // Show chat, hide video call
        videoCall.style.display = 'none';
        chatArea.style.display = 'block';
        chatInput.style.display = 'block';
        showToast("Video call ended");
    }
}

// Function to show chat area
function showChatArea() {
    const videoCall = document.getElementById('video-call');
    const chatArea = document.getElementById('chat-message-area');
    const chatInput = document.querySelector('.chat-input');
    
    videoCall.style.display = 'none';
    chatArea.style.display = 'block';
    chatInput.style.display = 'block';
}

// Function to toggle mute in video call
function toggleMute() {
    const muteBtn = document.querySelector('.control-mute i');
    if (muteBtn.classList.contains('fa-microphone')) {
        muteBtn.classList.remove('fa-microphone');
        muteBtn.classList.add('fa-microphone-slash');
        showToast("Microphone muted");
    } else {
        muteBtn.classList.remove('fa-microphone-slash');
        muteBtn.classList.add('fa-microphone');
        showToast("Microphone unmuted");
    }
}

// Function to toggle video in video call
function toggleVideo() {
    const videoBtn = document.querySelector('.control-video i');
    if (videoBtn.classList.contains('fa-video')) {
        videoBtn.classList.remove('fa-video');
        videoBtn.classList.add('fa-video-slash');
        showToast("Camera turned off");
    } else {
        videoBtn.classList.remove('fa-video-slash');
        videoBtn.classList.add('fa-video');
        showToast("Camera turned on");
    }
}

// Function to send chat message
function sendChatMessage() {
    const messageInput = document.getElementById('chat-message');
    const message = messageInput.value.trim();
    
    if (message) {
        const chatMessages = document.querySelector('.chat-messages');
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageHtml = `
            <div class="message-group">
                <div class="message-info">
                    <div class="message-avatar">You</div>
                    <div class="message-sender">You</div>
                    <div class="message-time">${currentTime}</div>
                </div>
                <div class="message-content">
                    <div class="message-bubble sent">
                        ${message}
                    </div>
                </div>
            </div>
        `;
        
        chatMessages.innerHTML += messageHtml;
        messageInput.value = '';
        
        // Auto-scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Function to switch between chat contacts
function switchChatContact(contactElement) {
    // Remove active class from all contacts
    document.querySelectorAll('.chat-contact').forEach(contact => {
        contact.classList.remove('active');
    });
    
    // Add active class to clicked contact
    contactElement.classList.add('active');
    
    // Update chat header with selected contact info
    const contactName = contactElement.querySelector('.contact-name').textContent;
    document.querySelector('.chat-user-name').textContent = contactName;
    
    // Update avatar
    const contactAvatar = contactElement.querySelector('.contact-avatar').textContent.trim().substring(0, 2);
    document.querySelector('.chat-user-avatar').textContent = contactAvatar;
    
    // Clear chat messages for new contact
    document.querySelector('.chat-messages').innerHTML = `
        <div class="message-group">
            <div class="message-info">
                <div class="message-avatar">${contactAvatar}</div>
                <div class="message-sender">${contactName}</div>
                <div class="message-time">Just now</div>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    Hello! How can I help you today? Would you like to chat or start a video session?
                </div>
            </div>
        </div>
    `;
}

// Function to display toast messages
function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast-message');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-message';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '4px';
        toast.style.zIndex = '1000';
        document.body.appendChild(toast);
    }
    
    // Set message and show toast
    toast.textContent = message;
    toast.style.display = 'block';
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}
        
        // Clear input
        messageInput.value = '';
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        
        return `${hours}:${minutes} ${ampm}`;
    }

    function toggleVideoCall() {
        const chatMessages = document.querySelector('.chat-messages');
        const chatInput = document.querySelector('.chat-input');
        const videoCall = document.getElementById('video-call');
        
        if (videoCall.style.display === 'none') {
            chatMessages.style.display = 'none';
            chatInput.style.display = 'none';
            videoCall.style.display = 'flex';
            showToast('Video call started');
        } else {
            chatMessages.style.display = 'block';
            chatInput.style.display = 'block';
            videoCall.style.display = 'none';
            showToast('Video call ended');
        }
    }

    function toggleMute() {
        const muteBtn = document.querySelector('.control-mute i');
        if (muteBtn.classList.contains('fa-microphone')) {
            muteBtn.classList.remove('fa-microphone');
            muteBtn.classList.add('fa-microphone-slash');
            showToast('Microphone muted');
        } else {
            muteBtn.classList.remove('fa-microphone-slash');
            muteBtn.classList.add('fa-microphone');
            showToast('Microphone unmuted');
        }
    }

    function toggleVideo() {
        const videoBtn = document.querySelector('.control-video i');
        if (videoBtn.classList.contains('fa-video')) {
            videoBtn.classList.remove('fa-video');
            videoBtn.classList.add('fa-video-slash');
            showToast('Camera turned off');
        } else {
            videoBtn.classList.remove('fa-video-slash');
            videoBtn.classList.add('fa-video');
            showToast('Camera turned on');
        }
    }