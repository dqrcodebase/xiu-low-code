/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function queryProductList(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'dva' },
          { id: 2, name: 'antd' },
        ],
      });
    }, 2000);
  });
}