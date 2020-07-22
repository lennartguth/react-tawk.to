'use strict'

//pass your tawk.to propertyId
module.exports = function tawkTo(propertyId, email, firstName, lastName) {
    if (!window) {
        throw new Error('DOM is unavailable')
    }
    window.Tawk_API = window.Tawk_API || {}

    window.Tawk_LoadStart = new Date()

    // pass attributes to tawk.to
    window.Tawk_API.onLoad = () => {
        window.Tawk_API.setAttributes(
            {
                name: `${firstName} ${lastName}`,
                email
            },
            (err) => {}
        )
    }

    const tawk = document.getElementById('tawkId')
    if (tawk) {
        // Prevent TawkTo to create root script if it already exists
        return window.Tawk_API
    }

    const script = document.createElement('script')
    script.id = 'tawkId'
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/default`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const first_script_tag = document.getElementsByTagName('script')[0]
    if (!first_script_tag || !first_script_tag.parentNode) {
        throw new Error('DOM is unavailable')
    }

    first_script_tag.parentNode.insertBefore(script, first_script_tag)
}
