import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

/* import specific icons */
import { faComments, faAnglesLeft, faAnglesRight, faArrowRight, faArrowLeft, faMagnifyingGlass, faPlus, faMinus, faAngleDown, faHandPointDown, faAngleRight, faCalendarDays, faChevronRight, faUserSecret, faLongArrowRight, faSpinner, faTimes, faCaretDown, faPlay } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faComments, faAnglesLeft, faAnglesRight, faArrowRight, faArrowLeft, faMagnifyingGlass, faPlus, faMinus, faAngleDown, faHandPointDown, faUserSecret, faAngleRight, faCalendarDays, faChevronRight, faLongArrowRight, faSpinner, faTimes, faCaretDown, faPlay)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon);
});
