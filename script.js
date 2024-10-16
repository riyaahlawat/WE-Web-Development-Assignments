document.querySelectorAll('h1, h2').forEach(heading => {
    heading.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

function generateTOC() {
    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = ''; 

    document.querySelectorAll('h1, h2').forEach(heading => {
        const tocItem = document.createElement('li');
        const tocLink = document.createElement('a');
        const section = heading.closest('section');

        if (section && section.id) {
            tocLink.textContent = heading.textContent;
            tocLink.href = `#${section.id}`;
            tocItem.appendChild(tocLink);
            tocList.appendChild(tocItem);
        }
    });
}

generateTOC();
