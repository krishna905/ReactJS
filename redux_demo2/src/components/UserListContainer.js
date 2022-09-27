import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserListContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.isLoading ? (
    <h2>Still Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list :</h2>
      <div>
        { userData && 
            userData.users &&
               userData.users.map(user => <p>{user.name}</p>)}
        </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUsers())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)