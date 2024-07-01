import React from 'react'
import { useSelector } from 'react-redux'
import { Authenticated, NotAuthenticated } from './MainNavigation'

const RootNavigation = () => {
    const user = useSelector(state => state.user)
    return user.isLoggedIn ? <Authenticated /> : <NotAuthenticated />
}

export default RootNavigation