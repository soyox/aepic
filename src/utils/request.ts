import axios from 'axios';
type ResWrapper = {
  code: number;
  msg: string;
  data: unknown;
};
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

request.interceptors.response.use((res) => {
  const { code, msg, data } = res.data;
  if (code === 200) {
    return data as ResWrapper;
  } else {
    //TODO：业务请求错误
    return Promise.reject(new Error(msg));
  }
});

export default request;
