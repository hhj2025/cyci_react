import api from "../../axiosSetting";

export const boardList = (obj) => {
    return api.get('/board/list', JSON.stringify(obj));
}

