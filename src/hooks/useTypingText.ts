import { waitMillis } from '@/utils/time-utils';
import { ref } from 'vue';

export function useTypingText(
    allText: string,
    tyingSpeed = 300,
    endWait = 2000,
) {
    const typingText = ref('');
    let index = 0;

    async function typeText() {
        if (index > allText.length) {
            await waitMillis(endWait);
            index = 0;
        }
        typingText.value = allText.substring(0, index);
        index++;
        await waitMillis(tyingSpeed); // 调整打字速度
        typeText();
    }
    typeText();
    return {
        typingText,
    };
}
