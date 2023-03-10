const projects = [
    'four-card-feature-section',
    'order-summary-card',
    'profile-card-component',
    'single-price-grid-component',
    '3-column-preview-card',
    'stats-preview-card-component',
    'faq-accordion-card',
    'social-proof-section-master',
    'huddle-landing-page'
];

const list = document.getElementById('list');

projects.forEach((project) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${project}/index.html`
    link.innerText = `${formatProjectName(project)}`;

    const img = document.createElement('img');
    img.src = `/${project}/design/desktop-design.jpg`;

    link.prepend(img);
    listItem.appendChild(link);
    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}