import { waitMillis } from '@/utils/time-utils';
import { ref } from 'vue';

export function useTypingText(
    textArr: string[],
    tyingSpeed = 300,
    nextWait = 500,
    endWait = 2000,
) {
    const typingText = ref('');
    let lastText = '';
    let index = 0;
    let allText = textArr;
    let arrIdx = 0;
    let flag = true;

    async function setAllText(textArr: string[]) {
        allText = textArr;
        arrIdx = 0;
        lastText = '';
        index = 0;
        typingText.value = '';

        flag = false;
        await waitMillis(300);
        flag = true;
        typeText();
    }

    async function typeText() {
        while (flag) {
            if (index > allText[arrIdx].length) {
                arrIdx++;
                if (arrIdx === allText.length) {
                    typingText.value = typingText.value;
                    await waitMillis(endWait);
                    lastText = '';
                    arrIdx = 0;
                } else {
                    typingText.value = typingText.value + '<br>';
                    lastText = typingText.value;
                    await waitMillis(nextWait);
                }
                index = 0;
            }
            typingText.value = lastText + allText[arrIdx].substring(0, index);
            index++;
            await waitMillis(tyingSpeed); // 调整打字速度
        }
    }

    typeText();
    return {
        typingText,
        setAllText,
    };
}
