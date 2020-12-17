import request from './index'
export  const  validate:any = function ():any {
    return request.get(`/user/validate`);
}
export  const  register:any = function (values:any):any {
    return request.post<T,T>(`/user/register`,values)
}
export  const  login:any = function (values:any):any {
    return request.post<T,T>(`/user/login`,values)
}
