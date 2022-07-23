export const pending = (state) => {
    state.isLoading = true
}

export const errorLoad = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

export const requestFulfilled = (state, action) => {
    // функция принимает результат асинк санка, в котором поле тайп = полю в начальном состоянии и в зависимости от тайп, меняет конкретнный стейт
    const type = action.payload.type

    if (action.payload.response.page === 1) {
        state[type] = action.payload.response
    } else {
        state[type].results = [...state[type].results, ...action.payload.response.results]
    }

    state.isLoading = false
    state.error = ''
}