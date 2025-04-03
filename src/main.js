import OverlayMenu from "./modules/OverlayMenu"

new OverlayMenu()

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggers = document.querySelectorAll(
    ".header__menu-item--tooltip, .header__tooltip-item--tooltip"
  )

  tooltipTriggers.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.stopPropagation()

      const tooltip = this.querySelector(".header__tooltip")
      if (tooltip) {
        tooltip.classList.toggle("hidden-tablet")
      }
    })
  })

  document.addEventListener("click", function () {
    document.querySelectorAll(".header__tooltip.active").forEach((tooltip) => {
      tooltip.classList.remove("hidden-tablet")
    })
  })
})
