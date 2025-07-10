document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messagesContainer = document.getElementById('messages-container');

    const fetchMessages = async () => {
        try {
            const response = await fetch('/api/messages');
            const messages = await response.json();
            messagesContainer.innerHTML = '';
            messages.forEach(msg => {
                const card = document.createElement('div');
                card.className = 'message-card';
                card.innerHTML = `
                    <p class="name">${escapeHTML(msg.name)}</p>
                    <p>${escapeHTML(msg.content)}</p>
                    <p class="timestamp">${new Date(msg.created_at).toLocaleString()}</p>
                `;
                messagesContainer.appendChild(card);
            });
        } catch (error) {
            console.error('抓取留言時發生錯誤:', error);
        }
    };

    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const content = document.getElementById('content').value;
        try {
            await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, content })
            });
            messageForm.reset();
            fetchMessages();
        } catch (error) {
            console.error('新增留言時發生錯誤:', error);
        }
    });

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    fetchMessages();
});