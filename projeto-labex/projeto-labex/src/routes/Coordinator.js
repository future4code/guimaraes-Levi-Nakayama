export const goHomepage = (navigate) => {
  navigate('/')
}

export const goLogin = (navigate) => {
  navigate('/login')
}

export const goTripDetail = (navigate, id) => {
  navigate('/detail/${id}')
}