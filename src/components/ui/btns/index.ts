import { setTextColorWithScroll } from '../../../utils/styles-func/setTextColorWithScroll.ts';

export const linkColor = (scrollPos: number) => {
    return setTextColorWithScroll(scrollPos, 300);
};
