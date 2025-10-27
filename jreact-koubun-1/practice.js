// 元の配列
const orgArray = [1, 2, 3];

// スプレッド構文を使わず、配列の参照をコピー（同じ配列を参照する）
const refArray = orgArray;

// 元の配列に要素「4」を追加
orgArray.push(4);

console.log("orgArray:", orgArray.toString());
console.log("refArray:", refArray.toString());
