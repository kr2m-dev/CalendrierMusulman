/**
 * Calendrier Musulman Interactif
 * Logique principale du calendrier
 */

const CalendarApp = {
    currentDate: new Date(),
    displayedDate: new Date(),
    selectedDate: null,
    today: new Date(),

    init() {
        this.setupEventListeners();
        this.populateYearSelect();
        this.updateCurrentDateDisplay();
        this.renderCalendar();
        this.renderMonthEvents();
    },

    setupEventListeners() {
        document.getElementById('prev-month').addEventListener('click', () => this.changeMonth(-1));
        document.getElementById('next-month').addEventListener('click', () => this.changeMonth(1));
        document.getElementById('btn-today').addEventListener('click', () => {
            this.displayedDate = new Date();
            this.renderCalendar();
            this.renderMonthEvents();
        });
        document.getElementById('month-select').addEventListener('change', (e) => {
            this.displayedDate.setMonth(parseInt(e.target.value));
            this.renderCalendar();
            this.renderMonthEvents();
        });
        document.getElementById('year-select').addEventListener('change', (e) => {
            this.displayedDate.setFullYear(parseInt(e.target.value));
            this.renderCalendar();
            this.renderMonthEvents();
        });
        document.getElementById('modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('modal-overlay').addEventListener('click', () => this.closeModal());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    },

    populateYearSelect() {
        const yearSelect = document.getElementById('year-select');
        const currentYear = new Date().getFullYear();
        for (let year = currentYear - 10; year <= currentYear + 10; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === currentYear) option.selected = true;
            yearSelect.appendChild(option);
        }
    },

    changeMonth(delta) {
        this.displayedDate.setMonth(this.displayedDate.getMonth() + delta);
        this.renderCalendar();
        this.renderMonthEvents();
    },

    updateCurrentDateDisplay() {
        const hijriDate = HijriConverter.gregorianToHijri(this.today);
        document.getElementById('current-date-gregorian').textContent =
            HijriConverter.formatGregorianDate(this.today);
        document.getElementById('current-date-hijri').textContent =
            HijriConverter.formatHijriDateArabic(hijriDate);
    },

    renderCalendar() {
        const year = this.displayedDate.getFullYear();
        const month = this.displayedDate.getMonth();

        document.getElementById('month-year-gregorian').textContent =
            `${HijriConverter.getGregorianMonthName(month)} ${year}`;
        const hijriInfo = HijriConverter.gregorianToHijri(this.displayedDate);
        document.getElementById('month-year-hijri').textContent =
            `${hijriInfo.monthNameArabic} ${hijriInfo.fullYear}H`;

        document.getElementById('month-select').value = month;
        document.getElementById('year-select').value = year;

        this.generateCalendarGrid(year, month);
    },

    generateCalendarGrid(year, month) {
        const grid = document.getElementById('calendar-grid');
        grid.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        // Cellules vides pour les jours avant le premier du mois
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'h-24 bg-gray-50/50 border border-gray-100';
            grid.appendChild(emptyCell);
        }

        // Jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const cell = this.createDayCell(date, day);
            grid.appendChild(cell);
        }
    },

    createDayCell(date, day) {
        const cell = document.createElement('div');
        const isToday = this.isSameDay(date, this.today);
        const events = CalendarEvents.getEventsForDate(date);
        const dayOfWeek = date.getDay();
        const hijriDate = HijriConverter.gregorianToHijri(date);
        const daySignificance = CalendarEvents.getDaySignificance(date);

        let classes = 'day-cell h-24 border border-gray-100 p-2 cursor-pointer relative overflow-hidden';

        // Couleur de fond selon le type de jour
        if (daySignificance && daySignificance.color) {
            const colorMap = {
                'red': 'bg-red-100',
                'yellow': 'bg-yellow-100',
                'blue': 'bg-blue-100',
                'amber': 'bg-amber-100',
                'purple': 'bg-purple-100',
                'emerald': 'bg-emerald-100'
            };
            classes += ' ' + (colorMap[daySignificance.color] || 'bg-white');
        } else if (dayOfWeek === 5) {
            classes += ' bg-emerald-50/50';
        } else {
            classes += ' bg-white hover:bg-gray-50';
        }

        if (isToday) {
            classes += ' today ring-2 ring-emerald-500';
        }

        cell.className = classes;
        cell.setAttribute('data-date', date.toISOString().split('T')[0]);

        // Contenu de la cellule
        const dayNumber = document.createElement('div');
        dayNumber.className = 'flex items-center justify-between mb-1';

        const gregNum = document.createElement('span');
        gregNum.className = `text-lg font-bold ${isToday ? 'text-emerald-600' : 'text-gray-700'}`;
        gregNum.textContent = day;

        const hijriNum = document.createElement('span');
        hijriNum.className = 'text-sm font-arabic text-emerald-600';
        hijriNum.textContent = hijriDate.day;

        dayNumber.appendChild(gregNum);
        dayNumber.appendChild(hijriNum);
        cell.appendChild(dayNumber);

        // Indicateurs d'evenements
        if (events.length > 0) {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'flex flex-wrap gap-1 mt-1';

            const colorClasses = {
                'MAGAL': 'bg-purple-500',
                'FETE_ISLAMIQUE': 'bg-emerald-500',
                'JOUR_NON_RECOMMANDE': 'bg-red-500',
                'JEUNE_RECOMMANDE': 'bg-yellow-500',
                'RASAGE_RECOMMANDE': 'bg-blue-500',
                'RELATIONS_DECONSEILLEES': 'bg-amber-700'
            };

            events.forEach(event => {
                const indicator = document.createElement('div');
                const colorClass = colorClasses[event.type] || 'bg-gray-400';
                indicator.className = `w-2 h-2 rounded-full ${colorClass}`;
                indicator.title = event.name;
                indicatorsContainer.appendChild(indicator);

                if (event.importance === 'highest' || event.importance === 'high') {
                    const eventName = document.createElement('div');
                    eventName.className = 'text-xs text-gray-600 truncate mt-1 font-medium';
                    eventName.textContent = event.name;
                    cell.appendChild(eventName);
                }
            });

            cell.appendChild(indicatorsContainer);
        }

        cell.addEventListener('click', () => this.openDayModal(date, events));
        return cell;
    },

    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    },

    openDayModal(date, events) {
        const modal = document.getElementById('day-modal');
        const hijriDate = HijriConverter.gregorianToHijri(date);

        document.getElementById('modal-date-gregorian').textContent =
            HijriConverter.formatGregorianDate(date);
        document.getElementById('modal-date-hijri').textContent =
            HijriConverter.formatHijriDateArabic(hijriDate);

        const content = document.getElementById('modal-content');
        content.innerHTML = '';

        if (events.length === 0) {
            content.innerHTML = `
                <div class="text-center py-8 text-gray-500">
                    <p class="mb-2">Aucun evenement particulier ce jour.</p>
                    <p class="text-sm">Ce jour est favorable pour toutes activites.</p>
                </div>
            `;
        } else {
            events.forEach(event => {
                const eventCard = document.createElement('div');
                const colorClasses = {
                    'MAGAL': 'bg-purple-50 border-purple-500',
                    'FETE_ISLAMIQUE': 'bg-emerald-50 border-emerald-500',
                    'JOUR_NON_RECOMMANDE': 'bg-red-50 border-red-500',
                    'JEUNE_RECOMMANDE': 'bg-yellow-50 border-yellow-500',
                    'RASAGE_RECOMMANDE': 'bg-blue-50 border-blue-500',
                    'RELATIONS_DECONSEILLEES': 'bg-amber-50 border-amber-700'
                };
                const cardClass = colorClasses[event.type] || 'bg-gray-50 border-gray-500';
                eventCard.className = `p-4 rounded-lg border-l-4 ${cardClass}`;

                const icons = {
                    'MAGAL': '⭐',
                    'FETE_ISLAMIQUE': '🕌',
                    'JOUR_NON_RECOMMANDE': '⚠️',
                    'JEUNE_RECOMMANDE': '🌙',
                    'RASAGE_RECOMMANDE': '✂️',
                    'RELATIONS_DECONSEILLEES': '🔴'
                };

                eventCard.innerHTML = `
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">${icons[event.type] || '📅'}</span>
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-800 text-lg">${event.name}</h4>
                            ${event.description ? `<p class="text-gray-600 mt-1">${event.description}</p>` : ''}
                            ${event.community ? `<span class="inline-block mt-2 px-2 py-1 bg-gray-200 rounded text-xs text-gray-700">${event.community}</span>` : ''}
                            ${event.location ? `<p class="text-sm text-gray-500 mt-1">📍 ${event.location}</p>` : ''}
                        </div>
                    </div>
                `;
                content.appendChild(eventCard);
            });
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        const modal = document.getElementById('day-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    },

    renderMonthEvents() {
        const container = document.getElementById('month-events');
        const year = this.displayedDate.getFullYear();
        const month = this.displayedDate.getMonth();
        const events = CalendarEvents.getEventsForMonth(year, month);

        container.innerHTML = '';

        if (events.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-8 text-gray-500">
                    <p>Aucun evenement majeur ce mois-ci</p>
                </div>
            `;
            return;
        }

        events.forEach(dayEvents => {
            dayEvents.events.forEach(event => {
                if (event.importance === 'highest' || event.importance === 'high' || event.type === 'MAGAL') {
                    const card = document.createElement('div');
                    card.className = 'p-4 bg-white rounded-lg shadow border border-gray-100 hover:shadow-md transition-shadow cursor-pointer';

                    const date = dayEvents.date;
                    const dateStr = `${date.getDate()} ${HijriConverter.getGregorianMonthName(date.getMonth())}`;

                    card.innerHTML = `
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-full bg-${event.color || 'gray'}-100 flex items-center justify-center text-xl">
                                ${event.type === 'MAGAL' ? '⭐' : event.type === 'FETE_ISLAMIQUE' ? '🕌' : '📅'}
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-800">${event.name}</h4>
                                <p class="text-sm text-gray-500">${dateStr}</p>
                            </div>
                        </div>
                    `;

                    card.addEventListener('click', () => this.openDayModal(date, [event]));
                    container.appendChild(card);
                }
            });
        });
    }
};

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    CalendarApp.init();
});
