const skills = [
    { label: 'HTML', level: 80 },
    { label: 'CSS', level: 90 },
    { label: 'JavaScript', level: 70 }
];

// Animate the skill bars
skills.forEach((skill, index) => {
    const skillBar = document.querySelectorAll('.skill-bar')[index];
    const skillBarInner = skillBar.querySelector('.skill-bar-inner');
    const skillBarPercentage = skillBar.querySelector('.skill-bar-percentage');

    skillBarInner.style.width = `${skill.level}%`;
    skillBarPercentage.textContent = `${skill.level}%`;
});
skills.forEach((skill, index) => {
    const skillBar = document.querySelectorAll('.skill-bar')[index];
    const skillBarInner = skillBar.querySelector('.skill-bar-inner1');
    const skillBarPercentage = skillBar.querySelector('.skill-bar-percentage');

    skillBarInner.style.width = `${skill.level}%`;
    skillBarPercentage.textContent = `${skill.level}%`;
});

skills.forEach((skill, index) => {
    const skillBar = document.querySelectorAll('.skill-bar')[index];
    const skillBarInner = skillBar.querySelector('.skill-bar-inner2');
    const skillBarPercentage = skillBar.querySelector('.skill-bar-percentage');

    skillBarInner.style.width = `${skill.level}%`;
    skillBarPercentage.textContent = `${skill.level}%`;
});