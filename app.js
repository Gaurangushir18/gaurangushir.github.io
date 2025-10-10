const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
}

// Theme toggle removed per request

const printBtn = document.getElementById('printBtn');
if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
}

// Removed scroll reveal animations

const contactDropdown = document.getElementById('contactDropdown');
const contactValue = document.getElementById('contactValue');
if (contactDropdown && contactValue) {
    const values = {
        name: 'Gaurang Ushir',
        university: 'Symbiosis Skills & Professional University Kiwale',
        gender: 'Male',
        discipline: 'Mechatronics Engineering',
        email: 'gaurangushir18@gmail.com',
        phone: '+91 8446392101',
        linkedin: 'https://linkedin.com/in/gaurangushir',
        website: 'https://gaurangushir.com',
        birthday: '18 September',
        address: '25/406, Pradhikaran, Nigdi, Pune - 44'
    };

    const render = () => {
        const key = contactDropdown.value;
        const v = values[key];
        if (!v) {
            contactValue.textContent = '—';
            return;
        }
        if (key === 'linkedin' || key === 'website') {
            contactValue.innerHTML = `<a href="${v}" target="_blank" rel="noopener">${v}</a>`;
        } else if (key === 'phone') {
            contactValue.innerHTML = `<a href="tel:+918446392101">+91 8446392101</a>`;
        } else if (key === 'email') {
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(v)}`;
            contactValue.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${v}</a>`;
        } else {
            contactValue.textContent = v;
        }
    };

    contactDropdown.addEventListener('change', render);
    render();
}


