
export const increment = (number) => {
    return {
        type: "INCREMENT",  //アクションの名前
        payload:number,  //incrementの呼び出しで引数を受け取る
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};

export const login = () => {
    return {
        type: "LOGIN",
    };
};