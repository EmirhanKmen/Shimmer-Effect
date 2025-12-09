/* 
   Shimmer effect Website Skeleton Loader
   Version: 1.0
*/

(function() {
    const cssStyles = `
        body.hayalet-mode * {
            transition: none !important;
        }
        .g-button {
            color: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            background-color: #d1d5db !important;
            background-image: linear-gradient(90deg, #d1d5db 0%, #e5e7eb 50%, #d1d5db 100%) !important;
            background-size: 200% 100% !important;
            animation: cleanShimmer 1.5s infinite linear !important;
            border-radius: 6px !important;
            pointer-events: none !important;
            opacity: 1 !important;
        }
        .g-button::placeholder { opacity: 0 !important; color: transparent !important; }
        .g-media {
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E") !important;
            background-color: #e5e7eb !important;
            background-image: linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%) !important;
            background-size: 200% 100% !important;
            animation: cleanShimmer 1.5s infinite linear !important;
            border: none !important;
            box-shadow: none !important;
            min-height: 15px;
            display: inline-block !important;
            vertical-align: middle !important;
        }
        .g-text {
            color: transparent !important;
            border-color: transparent !important;
            background-color: #e5e7eb !important;
            background-image: linear-gradient(90deg, #e5e7eb 0%, #ffffff 50%, #e5e7eb 100%) !important;
            background-size: 200% 100% !important;
            animation: cleanShimmer 1.5s infinite linear !important;
            border-radius: 4px !important;
            pointer-events: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
            text-decoration: none !important;
        }
        body.hayalet-mode li, body.hayalet-mode div, body.hayalet-mode section, 
        body.hayalet-mode header, body.hayalet-mode footer, body.hayalet-mode nav, 
        body.hayalet-mode article, body.hayalet-mode aside {
             border-color: transparent !important; 
             box-shadow: none !important;
        }
        .g-container {
            background-color: #f9fafb !important;
            border-color: transparent !important;
        }
        @keyframes cleanShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        body.hayalet-mode {
            overflow-x: hidden;
            background-color: #fff !important;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = cssStyles;
    document.head.appendChild(styleSheet);

    function taraVeMaskele() {
        if (!document.body) return;
        document.body.classList.add('hayalet-mode');

        const allElements = document.getElementsByTagName('*');
        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            
            if (['SCRIPT', 'STYLE', 'HEAD', 'META', 'TITLE', 'LINK', 'BR', 'HR'].includes(el.tagName)) continue;

            if (el.tagName === 'BUTTON' || 
                el.tagName === 'INPUT' || 
                el.tagName === 'TEXTAREA' || 
                el.tagName === 'SELECT' ||
                (el.tagName === 'A' && el.className.includes('btn'))) {
                
                el.classList.add('g-button');
                continue;
            }

            if (['IMG', 'VIDEO', 'IFRAME', 'SVG'].includes(el.tagName)) {
                el.classList.add('g-media');
                continue;
            }

            let hasText = false;
            if (el.childNodes) {
                for (let j = 0; j < el.childNodes.length; j++) {
                    const node = el.childNodes[j];
                    if (node.nodeType === 3 && node.textContent.trim().length > 0) {
                        hasText = true;
                        break;
                    }
                }
            }

            if (hasText) {
                el.classList.add('g-text');
            } else {
                const style = window.getComputedStyle(el);
                if (style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent') {
                    el.classList.add('g-container');
                }
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', taraVeMaskele);
    } else {
        taraVeMaskele();
    }

    window.addEventListener('load', function() {
        setTimeout(() => {
            if(document.body) {
                document.body.classList.remove('hayalet-mode');
                const marked = document.querySelectorAll('.g-text, .g-media, .g-container, .g-button');
                marked.forEach(el => el.classList.remove('g-text', 'g-media', 'g-container', 'g-button'));
            }
        }, 1000); 
    });
})();