(function() {
    let clipboardHtml = [];
    let clipboardPlain = [];
    const tags = document.querySelectorAll('.wit-card > .card-content > .flex-row > .rhythm-horizontal-8');

    tags.forEach((el) => {
        // Prevent adding multiple checkboxes
        if (! el.querySelector('.azure-item-checkbox')) {
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'azure-item-checkbox';
            cb.style.marginRight = '8px';
            el.prepend(cb);

            cb.addEventListener('change', (e) => {
                const checkbox = e.target;
                const item_id = checkbox.parentElement.querySelector('.selectable-text').textContent;
                const item_url = checkbox.parentElement.querySelector('a').href;
                const item_text = checkbox.parentElement.querySelector('a').firstChild.textContent;

                const contentHtml = '<li>#<a href="' + item_url + '">' + item_id + '</a> | ' + item_text + '</li>';
                const contentPlain = '- #' + item_id + ' | ' + item_text;

                const index = clipboardPlain.indexOf(contentHtml);
                if (checkbox.checked && index === -1) {
                    clipboardHtml.push(contentHtml);
                    clipboardPlain.push(clipboardPlain);
                } else if (index > -1) {
                    clipboardHtml.splice(index, 1);
                    clipboardPlain.splice(index, 1);
                }

                navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': new Blob(['<ul>' + clipboardHtml.join('') + '</ul>'], { type: 'text/html' }),
                        'text/plain': new Blob([clipboardPlain.join('\r\n')], { type: 'text/plain' })
                    })
                ])
                    .then(() => console.log({contentHtml, contentPlain}))
                    .catch((e) => console.error(e));
            })
        }
    });
})();
