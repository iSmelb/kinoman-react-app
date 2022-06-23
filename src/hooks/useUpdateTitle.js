import { useEffect } from "react"

export const useUpdateTitle = (title = 'kinoman', arrDependencies = []) => {
    useEffect(() => {
        document.title = title
    }, arrDependencies)
}