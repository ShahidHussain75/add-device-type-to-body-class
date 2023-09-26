// The following JavaScript can be used separately without a WordPress plugin
document.addEventListener("DOMContentLoaded", function () {
    // Feature detection for adding classes to the body based on the detected browser
    var userAgent = window.navigator.userAgent.toLowerCase();
    var body = document.body;

    if (userAgent.includes('firefox')) {
        body.classList.add('browser-firefox');
    } else if (userAgent.includes('chrome')) {
        body.classList.add('browser-chrome');
    } else if (userAgent.includes('opera') || userAgent.includes('opr')) {
        body.classList.add('browser-opera');
    } else if (userAgent.includes('edge')) {
        body.classList.add('browser-edge');
    } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
        body.classList.add('browser-safari');
    }

    // Device detection based on user-agent
    if (userAgent.includes('ipad')) {
        body.classList.add('device-ipad');
    } else if (userAgent.includes('iphone')) {
        body.classList.add('device-iphone');
    } else if (userAgent.includes('android')) {
        body.classList.add('device-android-mobile'); // Android is classified as mobile
    } else {
        body.classList.add('device-desktop');
    }

    // OS detection (not very reliable)
    var os = ['windows', 'mac', 'linux'];
    var match = userAgent.match(new RegExp(os.join('|')));
    if (match) {
        body.classList.add(match[0]);
    }

    // Orientation detection for iPad
    if (userAgent.includes('ipad')) {
        if (window.orientation === 0 || window.orientation === 180) {
            // Portrait mode
            body.classList.add('portrait');
        } else if (window.orientation === 90 || window.orientation === -90) {
            // Landscape mode
            body.classList.add('landscape');
        }
    }

    // Screen width-based device detection
    var isMobile = window.innerWidth <= 767; // Adjust this width threshold as needed
    var isTablet = window.innerWidth > 767 && window.innerWidth <= 1024; // Adjust these thresholds as needed

    if (isMobile) {
        body.classList.add('device-mobile');
    } else if (isTablet) {
        body.classList.add('device-tablet');
    }
});