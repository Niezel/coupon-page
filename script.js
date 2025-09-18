document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const messageContainer = document.getElementById('message');

    copyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 클릭된 버튼의 바로 앞에 있는 요소를 찾아 텍스트를 가져옵니다.
            const textToCopyElement = event.target.previousElementSibling;
            const textToCopy = textToCopyElement.textContent.trim();

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // 복사 성공 시 버튼의 원래 텍스트를 저장합니다.
                    const originalButtonText = button.textContent;

                    // 버튼 텍스트를 '복사 완료!'로 변경합니다.
                    button.textContent = '복사 완료!';

                    // 2초 후에 원래 텍스트로 되돌립니다.
                    setTimeout(() => {
                        button.textContent = originalButtonText;
                    }, 20000);

                    // 하단 메시지를 표시합니다.
                    messageContainer.textContent = `'${textToCopy}' 복사됨`;
                    setTimeout(() => {
                        messageContainer.textContent = '';
                    }, 2000);
                })
                .catch(err => {
                    // 복사 실패 시 메시지를 표시합니다.
                    console.error('클립보드 복사 실패:', err);
                    messageContainer.textContent = '복사 실패 😥';
                });
        });
    });
});