//CATEGORY[0]은 '전체'로 고정
export const CATEGORY_ARR = ['전체', '운영체제', 'FE', 'CS', '일상'] as const;

/**
 * CATEGORY index 찾는 용도
 */
export const CATEGORY_OBJ: { [key: string]: number } = {};

CATEGORY_ARR.forEach((item, idx) => {
  CATEGORY_OBJ[item] = idx;
});
