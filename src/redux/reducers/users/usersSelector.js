export const getUsersSelector = state => state?.usersPage?.users || []

export const getPostsSelector = state => state?.usersPage?.posts || []

export const getProfileSelector = state => state?.usersPage?.profile || {}

export const getPostsCommentsSelector = state => state?.usersPage?.comments || []