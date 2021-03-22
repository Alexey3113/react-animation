import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PageAnimated } from '../../components/PageAnimated'
import { setAllPosts } from '../../redux/posts'

import "./style.scss"

export const DataList = () => {    
    const dispatch = useDispatch()
    const {posts, isLoading} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(setAllPosts())
    }, [])

    

    return (
        <div>
            <PageAnimated>
                <div className="data-list">
                
                    {posts.map((post, i) => {
                        const classnames = i % 2 === 0 ? "block block-left" : "block block-right"
                        return (
                            <div key={i} className="row">
                                <div className={classnames}>{post.title}</div>
                            </div>
                            
                        )
                    })}
                </div>
                {/* <div className=""></div> */}
                

            </PageAnimated>

        </div>
   )
}


