/**
 * Convertisseur de dates Grégorienne <=> Hégirienne (Islamique)
 * Basé sur l'algorithme de conversion précis
 */

const HijriConverter = {
    // Noms des mois grégoriens
    gregorianMonths: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ],

    // Noms des mois hégiriens
    hijriMonths: [
        'Muharram', 'Safar', "Rabi' al-awwal", "Rabi' al-thani",
        'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'ban',
        'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
    ],

    // Noms des mois hégiriens en arabe
    hijriMonthsArabic: [
        'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر',
        'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان',
        'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
    ],

    // Jours de la semaine
    weekDays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],

    /**
     * Convertit une date grégorienne en date hégirienne
     * @param {Date} gregorianDate - Date grégorienne
     * @returns {Object} Date hégirienne (day, month, year)
     */
    gregorianToHijri(gregorianDate) {
        const day = gregorianDate.getDate();
        const month = gregorianDate.getMonth() + 1; // 1-12
        const year = gregorianDate.getFullYear();

        // Algorithme de conversion
        let jd = this.gregorianToJulianDay(year, month, day);
        return this.julianDayToHijri(jd);
    },

    /**
     * Convertit une date hégirienne en date grégorienne
     * @param {number} hijriDay
     * @param {number} hijriMonth
     * @param {number} hijriYear
     * @returns {Date} Date grégorienne
     */
    hijriToGregorian(hijriDay, hijriMonth, hijriYear) {
        const jd = this.hijriToJulianDay(hijriDay, hijriMonth, hijriYear);
        return this.julianDayToGregorian(jd);
    },

    /**
     * Calcule le jour julien à partir d'une date grégorienne
     */
    gregorianToJulianDay(year, month, day) {
        if (month < 3) {
            year -= 1;
            month += 12;
        }
        const a = Math.floor(year / 100);
        const b = 2 - a + Math.floor(a / 4);
        return Math.floor(365.25 * (year + 4716)) +
               Math.floor(30.6001 * (month + 1)) +
               day + b - 1524.5;
    },

    /**
     * Convertit un jour julien en date hégirienne
     */
    julianDayToHijri(jd) {
        // Approximation de la date hégirienne
        const daysSinceEpoch = jd - 1948439.5;
        const hijriYear = Math.floor((daysSinceEpoch - 0.5) / 354.367) + 1;
        const yearStart = this.hijriToJulianDay(1, 1, hijriYear);
        const dayOfYear = Math.floor(jd - yearStart + 1);

        let month = 1;
        let day = dayOfYear;

        const monthLengths = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

        for (let i = 0; i < 12; i++) {
            if (day <= monthLengths[i]) {
                month = i + 1;
                break;
            }
            day -= monthLengths[i];
        }

        // Ajustement avec approximation plus précise
        const year = hijriYear + 1389; // Ajustement approximatif

        return {
            day: day,
            month: month,
            year: year,
            monthName: this.hijriMonths[month - 1],
            monthNameArabic: this.hijriMonthsArabic[month - 1],
            fullYear: year
        };
    },

    /**
     * Calcule le jour julien à partir d'une date hégirienne
     */
    hijriToJulianDay(day, month, year) {
        // Approximation: année hégirienne moyenne = 354.36707 jours
        const daysSinceEpoch = (year - 1) * 354.36707 +
                               (month - 1) * 29.53059 +
                               day - 1;
        return daysSinceEpoch + 1948439.5;
    },

    /**
     * Convertit un jour julien en date grégorienne
     */
    julianDayToGregorian(jd) {
        const z = Math.floor(jd + 0.5);
        const w = Math.floor((z - 1867216.25) / 36524.25);
        const x = Math.floor(w / 4);
        const a = z + 1 + w - x;
        const b = a + 1524;
        const c = Math.floor((b - 122.1) / 365.25);
        const d = Math.floor(365.25 * c);
        const e = Math.floor((b - d) / 30.6001);

        const day = b - d - Math.floor(30.6001 * e);
        const month = e < 14 ? e - 1 : e - 13;
        const year = month > 2 ? c - 4716 : c - 4715;

        return new Date(year, month - 1, day);
    },

    /**
     * Formate une date pour l'affichage
     */
    formatHijriDate(hijriDate) {
        return `${hijriDate.day} ${hijriDate.monthName} ${hijriDate.fullYear}H`;
    },

    formatHijriDateArabic(hijriDate) {
        return `${hijriDate.day} ${hijriDate.monthNameArabic} ${hijriDate.fullYear}هـ`;
    },

    formatGregorianDate(date) {
        const day = date.getDate();
        const month = this.gregorianMonths[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    },

    /**
     * Obtient les informations d'un mois complet
     */
    getMonthInfo(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        return {
            year,
            month,
            daysInMonth,
            startDayOfWeek,
            firstDay,
            lastDay
        };
    },

    /**
     * Obtient le nom du mois hégirien
     */
    getHijriMonthName(monthIndex) {
        return this.hijriMonths[monthIndex] || '';
    },

    /**
     * Obtient le nom du mois hégirien en arabe
     */
    getHijriMonthNameArabic(monthIndex) {
        return this.hijriMonthsArabic[monthIndex] || '';
    },

    /**
     * Obtient le nom du mois grégorien
     */
    getGregorianMonthName(monthIndex) {
        return this.gregorianMonths[monthIndex] || '';
    },

    /**
     * Vérifie si deux dates correspondent au même jour
     */
    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    },

    /**
     * Obtient la date d'aujourd'hui
     */
    getToday() {
        return new Date();
    }
};

// Export pour usage dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HijriConverter;
}
