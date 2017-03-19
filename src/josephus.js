/*
 * 约瑟夫问题： 一个初始数组，每三位剔除第三位，遇见队尾进队头
 * 求：出队后的数组
*/

const josephus = (items, k) => {
    let dest = []
    let i = 0

    while (items.length > 0) {
        dest.push(items.splice(i = (i + k - 1) % items.length, 1)[0]);
    }

      return dest
}
export default josephus
