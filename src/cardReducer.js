export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (state.some((prod) => prod.id === action.payload.id)) {
                return state.map((prod) =>
                    prod.id === action.payload.id ? { ...prod, count: prod.count + 1 } : prod
                );
            } else {
                return [...state, { ...action.payload }];
            }
        case "increase":
            return state.map((apranq) =>
                apranq.id === action.payload.id ? { ...apranq, count: apranq.count + 1 } : apranq
            );
        case "decrease":
            if (action.payload.count === 1) {
                return state.filter((s) => s.id !== action.payload.id)
            }
            else {
                return state.map((apranq) =>
                    apranq.id === action.payload.id ? { ...apranq, count: apranq.count - 1 } : apranq
                )
            }
        case "del":
            return state.filter((el) => el.id !== action.payload.id)
        default:
            return state
    }
}