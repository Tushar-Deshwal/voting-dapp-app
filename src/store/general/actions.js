import { Dark } from 'quasar'
import { setCssVar, getCssVar } from 'quasar'

export function setShowNavigation({ commit }, showNavigation) {
  commit('setShowNavigation', showNavigation)
}

export function setDarkMode({ commit }, value) {
  if (value) {
    Dark.set(true)
    commit('setDark', true)
    setCssVar('primary', '#dcdcdc')
    setCssVar('secondary', getCssVar('dark'))
    setCssVar('accent', '#9C27B0')
  } else {
    Dark.set(false)
    commit('setDark', false)
    setCssVar('primary', '#0B1921')
    setCssVar('secondary', '#ffffff')
    setCssVar('accent', '#ffecb3')
  }
}

export function setTitle({ commit }, title) {
  commit('setTitle', title)
}

export function setShowBack({ commit }, showBack) {
  commit('setShowBack', showBack)
}

export function setShowMenu({ commit }, showMenu) {
  commit('setShowMenu', showMenu)
}