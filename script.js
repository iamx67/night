document.addEventListener('DOMContentLoaded', () => {
    const patrolSectionBtn = document.getElementById('patrol-section-btn');
    const reportSectionBtn = document.getElementById('report-section-btn');
    const patrolSection = document.getElementById('patrol-section');
    const watchSection = document.getElementById('watch-section');

    const membersInput = document.getElementById('members-input');
    const selectLeadersBtn = document.getElementById('select-leaders-btn');
    const leadersSelection = document.getElementById('leaders-selection');
    const membersList = document.getElementById('members-list');
    const assemblePatrolBtn = document.getElementById('assemble-patrol-btn');
    const patrolOutput = document.getElementById('patrol-output');
    const patrolType = document.getElementById('patrol-type');
    const noViolatorsBtn = document.getElementById('no-violators-btn');
    const violatorsInput = document.getElementById('violators');
    const composeReportBtn = document.getElementById('compose-report-btn');
    const patrolReportOutput = document.getElementById('patrol-report-output');

    const watchTimeInput = document.getElementById('watch-time');
    const noWatchViolatorsBtn = document.getElementById('no-watch-violators-btn');
    const watchViolatorsInput = document.getElementById('watch-violators');
    const composeWatchReportBtn = document.getElementById('compose-watch-report-btn');
    const watchReportOutput = document.getElementById('watch-report-output');

    patrolSectionBtn.addEventListener('click', () => {
        patrolSection.classList.add('active');
        watchSection.classList.remove('active');
        patrolSectionBtn.classList.add('active');
        reportSectionBtn.classList.remove('active');
    });

    reportSectionBtn.addEventListener('click', () => {
        watchSection.classList.add('active');
        patrolSection.classList.remove('active');
        reportSectionBtn.classList.add('active');
        patrolSectionBtn.classList.remove('active');
    });

    selectLeadersBtn.addEventListener('click', () => {
        const members = membersInput.value.split(',').map(name => name.trim()).filter(Boolean);
        if (members.length) {
            membersList.innerHTML = '';
            members.forEach(member => {
                const span = document.createElement('span');
                span.textContent = member;
                span.addEventListener('click', () => {
                    span.classList.toggle('selected');
                });
                membersList.appendChild(span);
            });
            leadersSelection.classList.remove('hidden');
        }
    });

    assemblePatrolBtn.addEvent