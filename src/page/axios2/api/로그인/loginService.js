import api from "../../axiosSetting";

export const login = (obj) => {
    return api.post('/member/login', JSON.stringify(obj));
}

