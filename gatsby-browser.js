/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `برای دریافت به‌روز رسانی جدید، بارگذاری مجدد انجام شود؟`
  )

  if (answer === true) {
    window.location.reload()
  }
}