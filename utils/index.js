export const getLocalStore = (item) => {
  return localStorage.getItem(`${item}`)
}

export const setLocalStore = (item, data) => {
  console.log(typeof data)
  if (typeof data === 'object') {
    localStorage.setItem(item, JSON.stringify(data))
  } else {
    localStorage.setItem(`${item}`, data)
  }
}

export const getSessionStore = (item) => {
  return sessionStorage.getItem(`${item}`)
}

export const setSessionStore = (item, data) => {
  console.log(typeof data)
  if (typeof data === 'object') {
    sessionStorage.setItem(item, JSON.stringify(data))
  } else {
    sessionStorage.setItem(item, data)
  }
}

export const clearStore = {
  session: () => sessionStorage.clear(),
  local: () => localStorage.clear()
}
