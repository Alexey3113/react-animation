export const SET_POSTS = "POSTS/SET_POSTS"
export const CLEAR = "POSTS/CLEAR"
export const SET_LOADING = "POSTS/SET_LOADING"


export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts
})
export const clearProfile = () => ({
    type: CLEAR
})
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading
})
export const setAllPosts = () => async (dispatch) => {
    dispatch(setLoading(true))

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const posts = await response.json();

        dispatch(setPosts(posts))
    }  catch(error){
        console.log(error.message)
    } finally {
        dispatch(setLoading(false))
    }
}